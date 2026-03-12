import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const MODEL_ID = "gemini-2.5-flash-image";

interface HistoryPart { text?: string; image?: string; }
interface HistoryItem { role: "user" | "model"; parts: HistoryPart[]; }
interface FormattedPart { text?: string; inlineData?: { data: string; mimeType: string }; }
interface FormattedHistoryItem { role: "user" | "model"; parts: FormattedPart[]; }

export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ success: false, error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    const requestData = await req.json().catch(() => null);
    if (!requestData) {
      return NextResponse.json({ success: false, error: "Invalid JSON in request body" }, { status: 400 });
    }

    const { prompt, image: inputImage, history } = requestData;

    if (!prompt) {
      return NextResponse.json({ success: false, error: "Prompt is required" }, { status: 400 });
    }

    if (inputImage) {
      if (typeof inputImage !== "string" || !inputImage.startsWith("data:")) {
        return NextResponse.json({ success: false, error: "Invalid image format" }, { status: 400 });
      }
      const parts = inputImage.split(",");
      if (parts.length < 2 || !parts[1]) {
        return NextResponse.json({ success: false, error: "Malformed image data" }, { status: 400 });
      }
    }

    let response;

    try {
      const formattedHistory: FormattedHistoryItem[] =
        history && history.length > 0
          ? history
              .map((item: HistoryItem) => ({
                role: item.role,
                parts: item.parts
                  .map((part: HistoryPart): FormattedPart | null => {
                    if (part.text) return { text: part.text };
                    if (part.image && item.role === "user") {
                      const imgParts = part.image.split(",");
                      if (imgParts.length > 1) {
                        return { inlineData: { data: imgParts[1], mimeType: part.image.includes("image/png") ? "image/png" : "image/jpeg" } };
                      }
                    }
                    return null;
                  })
                  .filter((p): p is FormattedPart => p !== null),
              }))
              .filter((item: FormattedHistoryItem) => item.parts.length > 0)
          : [];

      const messageParts: FormattedPart[] = [{ text: prompt }];

      if (inputImage) {
        const imgParts = inputImage.split(",");
        const mimeType = inputImage.includes("image/png") ? "image/png" : "image/jpeg";
        messageParts.push({ inlineData: { data: imgParts[1], mimeType } });
      }

      formattedHistory.push({ role: "user", parts: messageParts });

      response = await ai.models.generateContent({
        model: MODEL_ID,
        contents: formattedHistory,
        config: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          responseModalities: ["Text", "Image"],
        },
      });
    } catch (error: any) {
      const errMsg = error?.message || String(error);
      const errStatus = error?.status || error?.code || "unknown";
      console.error("Gemini API error — status:", errStatus, "message:", errMsg);

      let userMessage = `Gemini API error: ${errMsg}`;
      if (errMsg.includes("404") || errMsg.includes("not found")) {
        userMessage = `Model "${MODEL_ID}" not found. Check your API key has access to image generation.`;
      } else if (errMsg.includes("403") || errMsg.includes("permission")) {
        userMessage = "API key does not have permission for image generation.";
      } else if (errMsg.includes("429")) {
        userMessage = "Rate limit exceeded. Please wait and try again.";
      }

      return NextResponse.json({ success: false, error: userMessage, details: errMsg }, { status: 500 });
    }

    if (!response?.candidates?.length) {
      return NextResponse.json({ success: false, error: "No response from Gemini API" }, { status: 500 });
    }

    let textResponse: string | null = null;
    let imageData: string | null = null;
    let mimeType = "image/png";

    const parts = response.candidates[0]?.content?.parts ?? [];

    for (const part of parts) {
      if ("inlineData" in part && part.inlineData?.data) {
        imageData = part.inlineData.data;
        mimeType = part.inlineData.mimeType || "image/png";
      } else if ("text" in part && part.text) {
        textResponse = part.text;
      }
    }

    if (!imageData) {
      console.error("No image in response. Parts received:", JSON.stringify(parts.map((p) => Object.keys(p))));
      return NextResponse.json(
        { success: false, error: "No image data returned. Model may have returned text only.", description: textResponse },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      image: `data:${mimeType};base64,${imageData}`,
      description: textResponse || null,
    });

  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ success: false, error: "Failed to generate image", details: error?.message || String(error) }, { status: 500 });
  }
}