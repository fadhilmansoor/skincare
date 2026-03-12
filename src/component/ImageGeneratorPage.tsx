"use client";
import { useRef, useState, useCallback } from "react";

export interface ServiceStyle {
  id: string;
  label: string;
  icon: string;
  desc: string;
  prompt: string;
}

export interface ServiceConfig {
  name: string;
  subtitle: string;
  uploadHint: string;
  styles: ServiceStyle[];
}

const HAIR_SERVICE: ServiceConfig = {
  name: "Hair Transformation",
  subtitle: "See your new look before the salon chair.",
  uploadHint: "Clear portrait, face-forward for best results",
  styles: [
    {
      id: "short-curly",
      label: "Short Curly",
      icon: "✦",
      desc: "Natural & bouncy",
      prompt:
        "Transform this person's hair to a short curly hairstyle with natural dark brown color. Keep the face and all other features exactly the same. Photorealistic.",
    },
    {
      id: "long-straight",
      label: "Long Straight",
      icon: "◈",
      desc: "Sleek & flowing",
      prompt:
        "Transform this person's hair to long straight silky hair to the shoulders. Keep face and all features exactly the same. Photorealistic.",
    },
    {
      id: "bob-cut",
      label: "Bob Cut",
      icon: "◇",
      desc: "Classic elegance",
      prompt:
        "Transform this person's hair to a classic chin-length bob. Keep the face and all other features exactly the same. Photorealistic.",
    },
    {
      id: "blonde",
      label: "Blonde",
      icon: "◉",
      desc: "Golden radiance",
      prompt:
        "Change this person's hair to golden blonde, same hairstyle. Keep face and all other features exactly the same. Photorealistic.",
    },
    {
      id: "jet-black",
      label: "Jet Black",
      icon: "●",
      desc: "Bold & dramatic",
      prompt:
        "Change this person's hair to deep jet black, same hairstyle. Keep face and all other features exactly the same. Photorealistic.",
    },
    {
      id: "buzz-cut",
      label: "Buzz Cut",
      icon: "◎",
      desc: "Clean & sharp",
      prompt:
        "Transform this person's hair to a clean buzz cut. Keep face and all other features exactly the same. Photorealistic.",
    },
    {
      id: "wavy",
      label: "Wavy Medium",
      icon: "◌",
      desc: "Soft & romantic",
      prompt:
        "Transform this person's hair to medium wavy hair. Keep face and all other features exactly the same. Photorealistic.",
    },
    {
      id: "auburn",
      label: "Auburn Red",
      icon: "◆",
      desc: "Warm & vivid",
      prompt:
        "Change this person's hair to rich auburn red, same hairstyle. Keep face and all other features exactly the same. Photorealistic.",
    },
  ],
};

interface GeneratedImage {
  id: string;
  url: string;
  style: string;
  timestamp: Date;
}

interface Props {
  service?: ServiceConfig;
}

export default function AITransformPage({ service = HAIR_SERVICE }: Props) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(service.styles[0]?.id ?? "");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [activeImage, setActiveImage] = useState<GeneratedImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async (facing: "user" | "environment") => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraReady(false);
    } catch {
      setError("Camera access denied. Please allow camera permission.");
      setCameraOpen(false);
    }
  }, []);

  const openCamera = () => {
    setError(null);
    setCameraOpen(true);
    setCameraReady(false);
    setTimeout(() => startCamera(facingMode), 80);
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setCameraOpen(false);
    setCameraReady(false);
  };

  const flipCamera = () => {
    const next: "user" | "environment" = facingMode === "user" ? "environment" : "user";
    setFacingMode(next);
    startCamera(next);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;

    const v = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (facingMode === "user") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(v, 0, 0);
    setUploadedImage(canvas.toDataURL("image/jpeg", 0.92));
    setUploadedFileName("camera-photo.jpg");
    setError(null);
    closeCamera();
  };

  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10 MB.");
      return;
    }

    setError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setUploadedFileName(file.name);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) processFile(f);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) processFile(f);
  };

  const handleGenerate = async () => {
    if (!uploadedImage) {
      setError("Please upload a photo first.");
      return;
    }

    setError(null);
    setIsGenerating(true);

    const style = service.styles.find((s) => s.id === selectedStyle);
    if (!style) {
      setError("Please select a style.");
      setIsGenerating(false);
      return;
    }

    try {
      const res = await fetch("/api/generateimage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: style.prompt, image: uploadedImage, history: [] }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Generation failed.");
        return;
      }

      const img: GeneratedImage = {
        id: Date.now().toString(),
        url: data.image,
        style: style.label,
        timestamp: new Date(),
      };

      setGeneratedImages((p) => [img, ...p]);
      setActiveImage(img);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Network error.";
      setError(message);
    } finally {
      setIsGenerating(false);
    }
  };

  const download = (img: GeneratedImage) => {
    const a = document.createElement("a");
    a.href = img.url;
    a.download = `spc-${img.style.replace(/\s+/g, "-").toLowerCase()}.png`;
    a.click();
  };

  const selectedStyleObj = service.styles.find((s) => s.id === selectedStyle);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600&family=DM+Mono:wght@300;400&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          max-width: 100%;
          overflow-x: hidden;
        }

        :root{
          --org:#F46700;
          --org2:#e05a00;
          --org-l:rgba(244,103,0,0.10);
          --org-g:rgba(244,103,0,0.25);
          --nvy:#0A3366;
          --nvy2:#082472;
          --nvy-l:rgba(10,51,102,0.07);
          --bg:#FFFCF8;
          --white:#fff;
          --bc:#566593;
          --hd:#0A3366;
          --br:#F0E8DF;
          --sh:0 8px 32px rgba(10,51,102,0.09);
          --shlg:0 24px 64px rgba(10,51,102,0.13);
          --r:16px;
          --rs:10px;
        }

        img, video {
          max-width: 100%;
          height: auto;
        }

        button, input, textarea, select {
          font: inherit;
        }

        .at{
          min-height:100vh;
          width:100%;
          overflow-x:hidden;
          background:var(--bg);
          font-family:'Poppins',sans-serif;
          color:var(--bc);
        }

        .at-body,
        .at-hero-body,
        .at-upload-row,
        .at-styles,
        .at-hist {
          min-width: 0;
        }

        .at-col-upload,
        .at-col-canvas,
        .at-col-styles,
        .at-style-info,
        .at-result,
        .at-empty,
        .at-hero-right,
        .at-hero-desc {
          min-width: 0;
        }

        .at button {
          -webkit-tap-highlight-color: transparent;
        }

        /* HERO */
        .at-hero{
          background:var(--nvy);
          padding:0 56px;
          position:relative;
          overflow:hidden;
        }

        .at-hero-bg{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:
            radial-gradient(ellipse 60% 80% at -10% 50%,rgba(244,103,0,0.18) 0%,transparent 60%),
            radial-gradient(ellipse 40% 60% at 110% 20%,rgba(244,103,0,0.10) 0%,transparent 50%);
        }

        .at-hero-lines{
          position:absolute;
          inset:0;
          pointer-events:none;
          overflow:hidden;
        }

        .at-hero-lines::before{
          content:'';
          position:absolute;
          width:600px;
          height:600px;
          border-radius:50%;
          border:1px solid rgba(244,103,0,0.12);
          top:-200px;
          right:-100px;
        }

        .at-hero-lines::after{
          content:'';
          position:absolute;
          width:400px;
          height:400px;
          border-radius:50%;
          border:1px solid rgba(244,103,0,0.08);
          top:-100px;
          right:0;
        }

        .at-hero-top{
          position:relative;
          z-index:2;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:24px 0;
          border-bottom:1px solid rgba(255,255,255,0.07);
          gap:16px;
          flex-wrap:wrap;
        }

        .at-brand{
          display:flex;
          align-items:center;
          gap:14px;
          min-width:0;
        }

        .at-brand-logo{
          width:46px;
          height:46px;
          border-radius:12px;
          background:linear-gradient(135deg,var(--org),#ff8c00);
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 0 28px var(--org-g),0 4px 12px rgba(0,0,0,0.25);
          flex-shrink:0;
          position:relative;
          overflow:hidden;
        }

        .at-brand-logo::after{
          content:'';
          position:absolute;
          top:-16px;
          left:-16px;
          width:50px;
          height:50px;
          background:rgba(255,255,255,0.18);
          border-radius:50%;
        }

        .at-brand-name{
          font-family:'Playfair Display',serif;
          font-size:21px;
          font-weight:700;
          color:#fff;
          word-break:break-word;
        }

        .at-brand-sub{
          font-family:'DM Mono',monospace;
          font-size:9px;
          letter-spacing:0.2em;
          text-transform:uppercase;
          color:var(--org);
          margin-top:3px;
        }

        .at-pills{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        .at-pill{
          display:flex;
          align-items:center;
          gap:7px;
          padding:6px 15px;
          border-radius:30px;
          border:1px solid rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.05);
          white-space:nowrap;
        }

        .at-pill-dot{
          width:6px;
          height:6px;
          border-radius:50%;
          background:var(--org);
          box-shadow:0 0 8px var(--org-g);
          animation:pulse 2s ease-in-out infinite;
        }

        @keyframes pulse{
          0%,100%{transform:scale(1)}
          50%{transform:scale(1.4);opacity:0.6}
        }

        .at-pill span{
          font-family:'DM Mono',monospace;
          font-size:11px;
          color:rgba(255,255,255,0.55);
        }

        .at-hero-body{
          position:relative;
          z-index:2;
          padding:44px 0 48px;
          display:grid;
          grid-template-columns:minmax(0, 1fr) auto;
          align-items:end;
          gap:40px;
        }

        .at-hero-title{
          font-family:'Playfair Display',serif;
          font-size:clamp(32px, 5vw, 54px);
          font-weight:400;
          color:#fff;
          line-height:1.08;
          word-break:break-word;
        }

        .at-hero-title em{
          font-style:italic;
          color:var(--org);
        }

        .at-hero-right{
          display:flex;
          flex-direction:column;
          align-items:flex-end;
          gap:20px;
        }

        .at-hero-desc{
          max-width:300px;
          font-size:13.5px;
          color:rgba(255,255,255,0.42);
          line-height:1.8;
          font-weight:300;
          text-align:right;
        }

        .at-hero-stat{
          display:flex;
          gap:24px;
          flex-wrap:wrap;
        }

        .at-stat{
          text-align:center;
        }

        .at-stat-n{
          font-family:'Playfair Display',serif;
          font-size:28px;
          font-weight:700;
          color:var(--org);
          line-height:1;
        }

        .at-stat-l{
          font-family:'DM Mono',monospace;
          font-size:9px;
          color:rgba(255,255,255,0.4);
          letter-spacing:0.12em;
          text-transform:uppercase;
          margin-top:4px;
        }

        /* STEP BAR */
        .at-stepbar{
          background:var(--white);
          border-bottom:1px solid var(--br);
          padding:0 56px;
          display:flex;
          align-items:center;
          box-shadow:0 2px 12px rgba(10,51,102,0.05);
          overflow-x:auto;
          overflow-y:hidden;
          scrollbar-width:none;
        }

        .at-stepbar::-webkit-scrollbar{
          display:none;
        }

        .at-step{
          display:flex;
          align-items:center;
          gap:10px;
          padding:15px 26px 15px 0;
          flex-shrink:0;
        }

        .at-step+.at-step{
          padding-left:26px;
          border-left:1px solid var(--br);
        }

        .at-step-n{
          width:28px;
          height:28px;
          border-radius:50%;
          border:1.5px solid var(--br);
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:'DM Mono',monospace;
          font-size:11px;
          color:var(--bc);
          flex-shrink:0;
          transition:all 0.25s;
        }

        .at-step.done .at-step-n{
          background:var(--org);
          border-color:var(--org);
          color:#fff;
        }

        .at-step-lbl{
          font-size:12px;
          font-weight:500;
          color:var(--bc);
          white-space:nowrap;
        }

        .at-step.done .at-step-lbl{
          color:var(--hd);
        }

        .at-step-gap{
          flex:1;
          min-width:24px;
        }

        .at-ai-pill{
          display:flex;
          align-items:center;
          gap:6px;
          font-family:'DM Mono',monospace;
          font-size:10px;
          color:var(--org);
          letter-spacing:0.1em;
          text-transform:uppercase;
          padding:5px 14px;
          border-radius:30px;
          background:var(--org-l);
          border:1px solid rgba(244,103,0,0.2);
          white-space:nowrap;
          flex-shrink:0;
        }

        /* LAYOUT */
        .at-body{
          display:grid;
          grid-template-columns:320px minmax(0,1fr) 340px;
          min-height:calc(100vh - 174px);
        }

        .at-col-upload{
          background:var(--white);
          border-right:1px solid var(--br);
          padding:32px 26px;
          display:flex;
          flex-direction:column;
          gap:24px;
          overflow-y:auto;
          overflow-x:hidden;
          max-height:calc(100vh - 174px);
        }

        .at-col-upload::-webkit-scrollbar{
          width:3px;
        }

        .at-col-upload::-webkit-scrollbar-thumb{
          background:var(--br);
        }

        .at-col-canvas{
          background:var(--bg);
          display:flex;
          flex-direction:column;
          position:relative;
          min-width:0;
        }

        .at-col-styles{
          background:var(--white);
          border-left:1px solid var(--br);
          padding:32px 22px;
          display:flex;
          flex-direction:column;
          gap:20px;
          overflow-y:auto;
          overflow-x:hidden;
          max-height:calc(100vh - 174px);
        }

        .at-col-styles::-webkit-scrollbar{
          width:3px;
        }

        .at-col-styles::-webkit-scrollbar-thumb{
          background:var(--br);
        }

        /* SECTION HEADER */
        .at-sec-head{
          display:flex;
          align-items:center;
          gap:11px;
          margin-bottom:16px;
          min-width:0;
        }

        .at-sec-n{
          width:28px;
          height:28px;
          border-radius:50%;
          background:var(--nvy);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:'DM Mono',monospace;
          font-size:11px;
          flex-shrink:0;
        }

        .at-sec-title{
          font-size:15px;
          font-weight:600;
          color:var(--hd);
        }

        .at-sec-sub{
          font-size:11px;
          color:var(--bc);
          font-weight:300;
          margin-top:2px;
        }

        /* UPLOAD BUTTONS */
        .at-upload-row{
          display:grid;
          grid-template-columns:repeat(2, minmax(0,1fr));
          gap:10px;
        }

        .at-upload-btn{
          padding:20px 10px 16px;
          border-radius:var(--r);
          border:1.5px dashed var(--br);
          background:var(--bg);
          cursor:pointer;
          transition:all 0.25s cubic-bezier(0.16,1,0.3,1);
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:9px;
          position:relative;
          overflow:hidden;
          min-width:0;
        }

        .at-upload-btn::before{
          content:'';
          position:absolute;
          inset:0;
          background:radial-gradient(circle at center,var(--org-l) 0%,transparent 70%);
          opacity:0;
          transition:opacity 0.3s;
        }

        .at-upload-btn:hover{
          border-color:var(--org);
          background:var(--white);
          transform:translateY(-3px);
          box-shadow:var(--sh);
        }

        .at-upload-btn:hover::before{
          opacity:1;
        }

        .at-upload-btn-icon{
          width:48px;
          height:48px;
          border-radius:13px;
          background:var(--white);
          border:1px solid var(--br);
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:var(--sh);
          transition:all 0.25s;
        }

        .at-upload-btn:hover .at-upload-btn-icon{
          background:var(--org-l);
          border-color:rgba(244,103,0,0.3);
          transform:scale(1.06);
        }

        .at-upload-btn-label{
          font-size:13px;
          font-weight:600;
          color:var(--hd);
          position:relative;
          z-index:1;
          text-align:center;
        }

        .at-upload-btn-sub{
          font-size:10px;
          color:var(--bc);
          position:relative;
          z-index:1;
          text-align:center;
        }

        /* PREVIEW */
        .at-prev{
          border-radius:var(--r);
          overflow:hidden;
          border:1px solid var(--br);
          box-shadow:var(--sh);
          position:relative;
          background:var(--nvy);
        }

        .at-prev img{
          width:100%;
          display:block;
          max-height:240px;
          object-fit:cover;
        }

        .at-prev-ov{
          position:absolute;
          inset:0;
          background:linear-gradient(to top,rgba(10,51,102,0.75) 0%,transparent 55%);
          pointer-events:none;
        }

        .at-prev-bar{
          position:absolute;
          bottom:0;
          left:0;
          right:0;
          padding:12px 14px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
        }

        .at-prev-name{
          font-family:'DM Mono',monospace;
          font-size:10px;
          color:rgba(255,255,255,0.8);
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          max-width:calc(100% - 90px);
        }

        .at-rm{
          background:rgba(255,255,255,0.12);
          backdrop-filter:blur(8px);
          border:1px solid rgba(255,255,255,0.2);
          color:rgba(255,255,255,0.85);
          padding:3px 10px;
          border-radius:20px;
          font-size:10px;
          font-family:'DM Mono',monospace;
          cursor:pointer;
          transition:all 0.15s;
          flex-shrink:0;
        }

        .at-rm:hover{
          background:rgba(244,103,0,0.4);
          color:#fff;
        }

        /* SELECTED STYLE */
        .at-selected-preview{
          background:var(--org-l);
          border:1px solid rgba(244,103,0,0.2);
          border-radius:var(--rs);
          padding:14px 16px;
          display:flex;
          align-items:center;
          gap:12px;
          min-width:0;
        }

        .at-sp-icon{
          width:40px;
          height:40px;
          border-radius:10px;
          background:var(--org);
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:16px;
          flex-shrink:0;
          box-shadow:0 4px 12px var(--org-g);
        }

        .at-sp-name{
          font-size:13px;
          font-weight:600;
          color:var(--hd);
        }

        .at-sp-desc{
          font-size:11px;
          color:var(--bc);
        }

        .at-div{
          height:1px;
          background:var(--br);
        }

        /* ERROR */
        .at-err{
          background:rgba(210,54,54,0.06);
          border:1px solid rgba(210,54,54,0.2);
          border-radius:var(--rs);
          padding:11px 14px;
          font-size:12px;
          color:#D23636;
          display:flex;
          align-items:flex-start;
          gap:9px;
          line-height:1.5;
        }

        /* GENERATE BUTTON */
        .at-btn{
          width:100%;
          padding:16px 20px;
          background:linear-gradient(135deg,var(--org),#ff8c00);
          color:#fff;
          border:none;
          border-radius:var(--rs);
          font-family:'Poppins',sans-serif;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
          transition:all 0.3s cubic-bezier(0.16,1,0.3,1);
          position:relative;
          overflow:hidden;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          box-shadow:0 6px 24px var(--org-g);
          letter-spacing:0.02em;
        }

        .at-btn::before{
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);
          pointer-events:none;
        }

        .at-btn:hover:not(:disabled){
          transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(244,103,0,0.4);
        }

        .at-btn:active:not(:disabled){
          transform:translateY(-1px);
        }

        .at-btn:disabled{
          opacity:0.45;
          cursor:not-allowed;
          transform:none;
          box-shadow:none;
        }

        .at-spin{
          width:17px;
          height:17px;
          border:2px solid rgba(255,255,255,0.35);
          border-top-color:#fff;
          border-radius:50%;
          animation:spin 0.7s linear infinite;
          flex-shrink:0;
        }

        @keyframes spin{
          to{transform:rotate(360deg)}
        }

        /* STYLE CARDS */
        .at-styles{
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .at-style{
          appearance:none;
          -webkit-appearance:none;
          text-align:left;
          width:100%;
          padding:13px 14px;
          border-radius:var(--rs);
          border:1.5px solid var(--br);
          background:var(--bg);
          cursor:pointer;
          transition:all 0.2s cubic-bezier(0.16,1,0.3,1);
          display:flex;
          align-items:center;
          gap:12px;
          position:relative;
          overflow:hidden;
          min-width:0;
        }

        .at-style::before{
          content:'';
          position:absolute;
          left:0;
          top:0;
          width:3px;
          height:100%;
          background:var(--org);
          transform:scaleY(0);
          transition:transform 0.2s;
          border-radius:0 2px 2px 0;
        }

        .at-style:hover{
          border-color:rgba(244,103,0,0.3);
          background:var(--white);
          transform:translateX(3px);
          box-shadow:0 4px 14px rgba(10,51,102,0.07);
        }

        .at-style.active{
          border-color:var(--org);
          background:var(--white);
          box-shadow:0 4px 18px rgba(244,103,0,0.12);
          transform:translateX(3px);
        }

        .at-style.active::before{
          transform:scaleY(1);
        }

        .at-style-ico{
          width:36px;
          height:36px;
          border-radius:9px;
          background:var(--bg);
          border:1px solid var(--br);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:14px;
          flex-shrink:0;
          transition:all 0.2s;
        }

        .at-style.active .at-style-ico{
          background:var(--org-l);
          border-color:rgba(244,103,0,0.3);
        }

        .at-style-info{
          flex:1;
          min-width:0;
        }

        .at-style-name{
          font-size:13px;
          font-weight:500;
          color:var(--hd);
          line-height:1.2;
        }

        .at-style-desc{
          font-size:11px;
          color:var(--bc);
          font-weight:300;
        }

        .at-style-chk{
          width:18px;
          height:18px;
          border-radius:50%;
          border:1.5px solid var(--br);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
          transition:all 0.2s;
        }

        .at-style.active .at-style-chk{
          background:var(--org);
          border-color:var(--org);
        }

        /* CANVAS */
        .at-canvas{
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:48px;
          position:relative;
          min-height:460px;
          overflow:hidden;
        }

        .at-canvas::before{
          content:'';
          position:absolute;
          inset:0;
          background-image:
            radial-gradient(circle,rgba(244,103,0,0.07) 1px,transparent 1px),
            radial-gradient(circle,rgba(10,51,102,0.04) 1px,transparent 1px);
          background-size:28px 28px,56px 56px;
          pointer-events:none;
        }

        .at-canvas::after{
          content:'';
          position:absolute;
          inset:0;
          background:radial-gradient(ellipse 65% 65% at center,transparent 20%,var(--bg) 100%);
          pointer-events:none;
        }

        /* EMPTY */
        .at-empty{
          text-align:center;
          position:relative;
          z-index:1;
          animation:fadeUp 0.6s ease;
          max-width:100%;
        }

        @keyframes fadeUp{
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:translateY(0)}
        }

        .at-empty-ring{
          width:160px;
          height:160px;
          margin:0 auto 28px;
          border-radius:50%;
          background:var(--white);
          border:1px solid var(--br);
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          box-shadow:var(--shlg);
        }

        .at-empty-ring::before{
          content:'';
          position:absolute;
          inset:-16px;
          border-radius:50%;
          border:1.5px dashed rgba(244,103,0,0.2);
          animation:rot 18s linear infinite;
        }

        .at-empty-ring::after{
          content:'';
          position:absolute;
          inset:-30px;
          border-radius:50%;
          border:1px dashed rgba(10,51,102,0.07);
          animation:rot 30s linear infinite reverse;
        }

        @keyframes rot{
          to{transform:rotate(360deg)}
        }

        .at-empty-core{
          width:80px;
          height:80px;
          border-radius:50%;
          background:linear-gradient(135deg,var(--nvy),#0d3d80);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .at-empty-title{
          font-family:'Playfair Display',serif;
          font-size:30px;
          font-weight:400;
          color:var(--hd);
          margin-bottom:8px;
          line-height:1.2;
        }

        .at-empty-title em{
          font-style:italic;
          color:var(--org);
        }

        .at-empty-sub{
          font-family:'DM Mono',monospace;
          font-size:11px;
          color:var(--bc);
          line-height:2.1;
          letter-spacing:0.04em;
        }

        /* RESULT */
        .at-result{
          position:relative;
          z-index:1;
          max-width:480px;
          width:100%;
          animation:fadeUp 0.5s cubic-bezier(0.16,1,0.3,1);
        }

        .at-result-card{
          background:var(--white);
          border-radius:20px;
          overflow:hidden;
          border:1px solid var(--br);
          box-shadow:var(--shlg);
          position:relative;
        }

        .at-result-card img{
          width:100%;
          display:block;
          max-height:min(60vh, 440px);
          object-fit:contain;
          background:var(--nvy);
        }

        .at-result-acts{
          position:absolute;
          top:14px;
          right:14px;
          display:flex;
          gap:8px;
        }

        .at-act-btn{
          background:rgba(255,255,255,0.93);
          backdrop-filter:blur(10px);
          border:1px solid var(--br);
          color:var(--hd);
          width:38px;
          height:38px;
          border-radius:9px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:all 0.15s;
          box-shadow:0 2px 8px rgba(0,0,0,0.09);
          flex-shrink:0;
        }

        .at-act-btn:hover{
          border-color:var(--org);
          color:var(--org);
        }

        .at-result-wm{
          position:absolute;
          bottom:14px;
          left:14px;
          display:flex;
          align-items:center;
          gap:6px;
          background:rgba(10,51,102,0.88);
          backdrop-filter:blur(8px);
          border-radius:20px;
          padding:5px 12px;
          max-width:calc(100% - 28px);
        }

        .at-wm-dot{
          width:5px;
          height:5px;
          border-radius:50%;
          background:var(--org);
          flex-shrink:0;
        }

        .at-wm-txt{
          font-family:'DM Mono',monospace;
          font-size:9px;
          color:rgba(255,255,255,0.72);
          letter-spacing:0.14em;
          text-transform:uppercase;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }

        .at-result-foot{
          padding:14px 18px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:12px;
          border-top:1px solid var(--br);
        }

        .at-result-sty{
          display:flex;
          align-items:center;
          gap:8px;
          min-width:0;
        }

        .at-result-sty-dot{
          width:8px;
          height:8px;
          border-radius:50%;
          background:var(--org);
          flex-shrink:0;
        }

        .at-result-sty-name{
          font-size:14px;
          font-weight:600;
          color:var(--hd);
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }

        .at-result-time{
          font-family:'DM Mono',monospace;
          font-size:11px;
          color:var(--bc);
          white-space:nowrap;
          flex-shrink:0;
        }

        /* GENERATING */
        .at-gen-ov{
          position:absolute;
          inset:0;
          z-index:10;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:22px;
          background:rgba(10,51,102,0.92);
          backdrop-filter:blur(14px);
          padding:24px;
          text-align:center;
        }

        .at-gen-anim{
          position:relative;
          width:80px;
          height:80px;
        }

        .at-gen-r1{
          position:absolute;
          inset:0;
          border-radius:50%;
          border:2px solid rgba(244,103,0,0.2);
          border-top-color:var(--org);
          animation:spin 1s linear infinite;
        }

        .at-gen-r2{
          position:absolute;
          inset:10px;
          border-radius:50%;
          border:1px dashed rgba(244,103,0,0.25);
          animation:spin 2.2s linear infinite reverse;
        }

        .at-gen-core{
          position:absolute;
          inset:22px;
          border-radius:50%;
          background:var(--org-l);
          border:1px solid rgba(244,103,0,0.25);
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .at-gen-title{
          font-family:'Playfair Display',serif;
          font-size:22px;
          font-weight:400;
          color:#fff;
        }

        .at-gen-sub{
          font-family:'DM Mono',monospace;
          font-size:11px;
          color:var(--org);
          letter-spacing:0.2em;
          text-transform:uppercase;
          animation:blink 1.8s ease-in-out infinite;
        }

        @keyframes blink{
          0%,100%{opacity:0.35}
          50%{opacity:1}
        }

        /* HISTORY */
        .at-hist{
          border-top:1px solid var(--br);
          background:var(--white);
          padding:14px 28px;
          display:flex;
          align-items:center;
          gap:14px;
          overflow-x:auto;
          overflow-y:hidden;
        }

        .at-hist::-webkit-scrollbar{
          height:3px;
        }

        .at-hist::-webkit-scrollbar-thumb{
          background:var(--br);
        }

        .at-hist-lbl{
          font-family:'DM Mono',monospace;
          font-size:10px;
          color:var(--bc);
          letter-spacing:0.2em;
          text-transform:uppercase;
          white-space:nowrap;
          flex-shrink:0;
        }

        .at-hist-sep{
          width:1px;
          height:44px;
          background:var(--br);
          flex-shrink:0;
        }

        .at-thumb{
          width:58px;
          height:58px;
          border-radius:var(--rs);
          overflow:hidden;
          border:2px solid var(--br);
          cursor:pointer;
          flex-shrink:0;
          transition:all 0.2s;
          background:#fff;
        }

        .at-thumb:hover{
          border-color:rgba(244,103,0,0.4);
          transform:translateY(-2px);
          box-shadow:var(--sh);
        }

        .at-thumb.active{
          border-color:var(--org);
          box-shadow:0 0 0 2px var(--org-l);
        }

        .at-thumb img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        /* CAMERA MODAL */
        .at-cam-overlay{
          position:fixed;
          inset:0;
          z-index:1000;
          background:rgba(10,51,102,0.88);
          backdrop-filter:blur(20px);
          display:flex;
          align-items:center;
          justify-content:center;
          padding:16px;
          animation:fadeUp 0.25s ease;
        }

        .at-cam-modal{
          background:var(--nvy);
          border-radius:24px;
          overflow:hidden;
          width:min(500px,100%);
          max-height:calc(100vh - 32px);
          display:flex;
          flex-direction:column;
          box-shadow:0 40px 100px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.07);
        }

        .at-cam-header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px 24px;
          border-bottom:1px solid rgba(255,255,255,0.08);
          background:rgba(255,255,255,0.03);
          gap:12px;
        }

        .at-cam-title{
          font-family:'Playfair Display',serif;
          font-size:20px;
          color:#fff;
          font-weight:400;
        }

        .at-cam-title em{
          font-style:italic;
          color:var(--org);
        }

        .at-cam-close{
          width:36px;
          height:36px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,0.15);
          background:rgba(255,255,255,0.07);
          color:rgba(255,255,255,0.6);
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:all 0.2s;
          flex-shrink:0;
        }

        .at-cam-close:hover{
          background:rgba(244,103,0,0.3);
          border-color:var(--org);
          color:#fff;
        }

        .at-cam-view{
          position:relative;
          background:#000;
          aspect-ratio:4/3;
          overflow:hidden;
          flex-shrink:0;
        }

        .at-cam-view video{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }

        .at-cam-loading{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:14px;
          background:rgba(10,51,102,0.75);
        }

        .at-cam-loading-ring{
          width:48px;
          height:48px;
          border:3px solid rgba(244,103,0,0.2);
          border-top-color:var(--org);
          border-radius:50%;
          animation:spin 1s linear infinite;
        }

        .at-cam-loading-txt{
          font-family:'DM Mono',monospace;
          font-size:11px;
          color:rgba(255,255,255,0.5);
          letter-spacing:0.15em;
          text-align:center;
        }

        .at-cam-guide{
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          pointer-events:none;
        }

        .at-cam-oval{
          width:52%;
          aspect-ratio:3/4;
          border:2px solid rgba(255,255,255,0.4);
          border-radius:50%;
          box-shadow:0 0 0 9999px rgba(0,0,0,0.22);
        }

        .at-cam-corner{
          position:absolute;
          width:22px;
          height:22px;
          border-color:var(--org);
          border-style:solid;
          border-width:0;
        }

        .at-cam-corner.tl{
          top:10%;
          left:24%;
          border-top-width:2px;
          border-left-width:2px;
          border-radius:4px 0 0 0;
        }

        .at-cam-corner.tr{
          top:10%;
          right:24%;
          border-top-width:2px;
          border-right-width:2px;
          border-radius:0 4px 0 0;
        }

        .at-cam-corner.bl{
          bottom:10%;
          left:24%;
          border-bottom-width:2px;
          border-left-width:2px;
          border-radius:0 0 0 4px;
        }

        .at-cam-corner.br{
          bottom:10%;
          right:24%;
          border-bottom-width:2px;
          border-right-width:2px;
          border-radius:0 0 4px 0;
        }

        .at-cam-footer{
          padding:20px 24px;
          display:flex;
          align-items:center;
          gap:14px;
          background:rgba(0,0,0,0.25);
        }

        .at-cam-flip{
          width:50px;
          height:50px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,0.18);
          background:rgba(255,255,255,0.08);
          color:rgba(255,255,255,0.75);
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:all 0.25s;
          flex-shrink:0;
        }

        .at-cam-flip:hover{
          background:rgba(255,255,255,0.18);
          color:#fff;
          transform:rotate(180deg);
        }

        .at-cam-shoot{
          flex:1;
          padding:15px 20px;
          background:linear-gradient(135deg,var(--org),#ff8c00);
          color:#fff;
          border:none;
          border-radius:var(--rs);
          font-family:'Poppins',sans-serif;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
          transition:all 0.25s cubic-bezier(0.16,1,0.3,1);
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          box-shadow:0 6px 24px var(--org-g);
          position:relative;
          overflow:hidden;
          min-width:0;
        }

        .at-cam-shoot::before{
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);
          pointer-events:none;
        }

        .at-cam-shoot:hover:not(:disabled){
          transform:translateY(-2px);
          box-shadow:0 12px 36px rgba(244,103,0,0.45);
        }

        .at-cam-shoot:disabled{
          opacity:0.4;
          cursor:not-allowed;
          transform:none;
          box-shadow:none;
        }

        .at-cam-spacer{
          width:50px;
          flex-shrink:0;
        }

        /* RESPONSIVE */
        @media (max-width: 1400px) {
          .at-body {
            grid-template-columns: 290px minmax(0, 1fr) 300px;
          }

          .at-canvas {
            padding: 36px;
          }
        }

        @media (max-width: 1200px) {
          .at-hero,
          .at-stepbar {
            padding-left: 28px;
            padding-right: 28px;
          }

          .at-body {
            grid-template-columns: 280px minmax(0, 1fr);
          }

          .at-col-styles {
            display: none;
          }

          .at-canvas {
            padding: 28px;
            min-height: 420px;
          }

          .at-hero-body {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 24px;
          }

          .at-hero-right {
            align-items: flex-start;
          }

          .at-hero-desc {
            text-align: left;
            max-width: 520px;
          }

          .at-hero-stat {
            justify-content: flex-start;
          }
        }

        @media (max-width: 992px) {
          .at-hero {
            padding-left: 20px;
            padding-right: 20px;
          }

          .at-stepbar {
            padding-left: 20px;
            padding-right: 20px;
          }

          .at-body {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .at-col-upload {
            max-height: none;
            border-right: none;
            border-bottom: 1px solid var(--br);
            padding: 24px 20px;
          }

          .at-col-canvas {
            min-height: unset;
          }

          .at-col-styles {
            display: flex;
            border-left: none;
            border-top: 1px solid var(--br);
            max-height: none;
            padding: 22px 20px;
          }

          .at-styles {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
          }

          .at-style {
            width: calc(50% - 5px);
          }

          .at-canvas {
            min-height: 380px;
            padding: 24px 20px;
          }

          .at-empty-ring {
            width: 140px;
            height: 140px;
          }

          .at-empty-title {
            font-size: 26px;
          }

          .at-result {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .at-hero-top {
            align-items: flex-start;
          }

          .at-brand-name {
            font-size: 18px;
          }

          .at-brand-sub {
            font-size: 8px;
          }

          .at-pills {
            width: 100%;
            flex-wrap: wrap;
          }

          .at-hero-body {
            padding: 30px 0 34px;
          }

          .at-hero-title {
            font-size: 30px;
            line-height: 1.12;
          }

          .at-hero-desc {
            font-size: 13px;
            line-height: 1.7;
          }

          .at-stat-n {
            font-size: 24px;
          }

          .at-step {
            padding-top: 13px;
            padding-bottom: 13px;
          }

          .at-upload-row {
            grid-template-columns: 1fr;
          }

          .at-style {
            width: 100%;
          }

          .at-result-foot {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .at-hist {
            padding: 12px 16px;
          }

          .at-hist-sep {
            height: 30px;
          }

          .at-thumb {
            width: 54px;
            height: 54px;
          }

          .at-btn {
            padding: 15px 18px;
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .at-hero,
          .at-stepbar {
            padding-left: 14px;
            padding-right: 14px;
          }

          .at-col-upload,
          .at-col-styles {
            padding-left: 14px;
            padding-right: 14px;
          }

          .at-canvas {
            padding: 18px 14px;
            min-height: 320px;
          }

          .at-brand {
            gap: 10px;
          }

          .at-brand-logo {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .at-brand-name {
            font-size: 16px;
          }

          .at-hero-title {
            font-size: 26px;
          }

          .at-hero-desc {
            font-size: 12px;
          }

          .at-hero-stat {
            gap: 14px;
          }

          .at-stat-n {
            font-size: 20px;
          }

          .at-stat-l {
            font-size: 8px;
          }

          .at-sec-title {
            font-size: 14px;
          }

          .at-sec-sub {
            font-size: 10px;
          }

          .at-upload-btn {
            padding: 16px 10px 14px;
          }

          .at-upload-btn-icon {
            width: 42px;
            height: 42px;
          }

          .at-selected-preview {
            padding: 12px;
            gap: 10px;
          }

          .at-sp-icon {
            width: 36px;
            height: 36px;
          }

          .at-empty-ring {
            width: 120px;
            height: 120px;
            margin-bottom: 20px;
          }

          .at-empty-core {
            width: 68px;
            height: 68px;
          }

          .at-empty-title {
            font-size: 22px;
          }

          .at-empty-sub {
            font-size: 10px;
            line-height: 1.9;
          }

          .at-result-acts {
            top: 10px;
            right: 10px;
          }

          .at-act-btn {
            width: 34px;
            height: 34px;
          }

          .at-result-wm {
            bottom: 10px;
            left: 10px;
            padding: 4px 10px;
          }

          .at-result-sty-name {
            font-size: 13px;
          }

          .at-result-time {
            font-size: 10px;
          }

          .at-cam-overlay {
            padding: 10px;
          }

          .at-cam-modal {
            border-radius: 18px;
            width: 100%;
            max-height: calc(100vh - 20px);
          }

          .at-cam-header {
            padding: 14px 16px;
          }

          .at-cam-title {
            font-size: 18px;
          }

          .at-cam-footer {
            padding: 14px 16px;
            gap: 10px;
          }

          .at-cam-flip {
            width: 44px;
            height: 44px;
          }

          .at-cam-shoot {
            padding: 13px 16px;
            font-size: 14px;
          }

          .at-cam-spacer {
            width: 44px;
          }

          .at-ai-pill {
            display: none;
          }
        }

        @media (max-width: 400px) {
          .at-hero-title {
            font-size: 23px;
          }

          .at-brand-name {
            font-size: 15px;
          }

          .at-pill span {
            font-size: 10px;
          }

          .at-step-lbl {
            font-size: 11px;
          }

          .at-step-n {
            width: 24px;
            height: 24px;
            font-size: 10px;
          }

          .at-style {
            padding: 11px 12px;
          }

          .at-style-name {
            font-size: 12px;
          }

          .at-style-desc {
            font-size: 10px;
          }

          .at-result-card img {
            max-height: 52vh;
          }

          .at-thumb {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>

      <div className="at">
        <div className="at-hero">
          <div className="at-hero-bg" />
          <div className="at-hero-lines" />

          <div className="at-hero-top">
            <div className="at-brand">
              <div className="at-brand-logo">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 3C9 3 6.5 5 6 8c-.5 3 1 5.5 3 7l1 1.5c.5.8 1 1.5 2 1.5s1.5-.7 2-1.5l1-1.5c2-1.5 3.5-4 3-7-.5-3-3-5-6-5z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 18l.5 2M15 18l-.5 2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="at-brand-name">Signature Plus Clinic</div>
                <div className="at-brand-sub">{service.name}</div>
              </div>
            </div>

            <div className="at-pills">
              <div className="at-pill">
                <div className="at-pill-dot" />
                <span>AI Powered</span>
              </div>
              <div className="at-pill">
                <span>Gemini Vision</span>
              </div>
            </div>
          </div>

          <div className="at-hero-body">
            <div className="at-hero-title">
              {service.name.split(" ")[0]}
              <br />
              <em>{service.name.split(" ").slice(1).join(" ") || "Studio"}</em>
            </div>

            <div className="at-hero-right">
              <p className="at-hero-desc">{service.subtitle}</p>
              <div className="at-hero-stat">
                <div className="at-stat">
                  <div className="at-stat-n">{service.styles.length}</div>
                  <div className="at-stat-l">Styles</div>
                </div>
                <div className="at-stat">
                  <div className="at-stat-n">AI</div>
                  <div className="at-stat-l">Powered</div>
                </div>
                <div className="at-stat">
                  <div className="at-stat-n">HD</div>
                  <div className="at-stat-l">Output</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="at-stepbar">
          <div className={`at-step${uploadedImage ? " done" : ""}`}>
            <div className="at-step-n">
              {uploadedImage ? (
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                "01"
              )}
            </div>
            <span className="at-step-lbl">Upload Photo</span>
          </div>

          <div className={`at-step${selectedStyle ? " done" : ""}`}>
            <div className="at-step-n">
              {selectedStyle ? (
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                "02"
              )}
            </div>
            <span className="at-step-lbl">Choose Style</span>
          </div>

          <div className={`at-step${activeImage ? " done" : ""}`}>
            <div className="at-step-n">
              {activeImage ? (
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                "03"
              )}
            </div>
            <span className="at-step-lbl">View Result</span>
          </div>

          <div className="at-step-gap" />

          <div className="at-ai-pill">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Gemini 2.5
          </div>
        </div>

        <div className="at-body">
          <aside className="at-col-upload">
            <div>
              <div className="at-sec-head">
                <div className="at-sec-n">01</div>
                <div>
                  <div className="at-sec-title">Upload Photo</div>
                  <div className="at-sec-sub">{service.uploadHint}</div>
                </div>
              </div>

              {!uploadedImage ? (
                <div className="at-upload-row">
                  <div className="at-upload-btn" onClick={() => fileInputRef.current?.click()}>
                    <div className="at-upload-btn-icon">
                      <svg width="22" height="22" fill="none" stroke="var(--org)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span className="at-upload-btn-label">Browse</span>
                    <span className="at-upload-btn-sub">JPG, PNG · 10 MB</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>

                  <div className="at-upload-btn" onClick={openCamera}>
                    <div className="at-upload-btn-icon">
                      <svg width="22" height="22" fill="none" stroke="var(--org)" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </div>
                    <span className="at-upload-btn-label">Camera</span>
                    <span className="at-upload-btn-sub">Take a photo</span>
                  </div>
                </div>
              ) : (
                <div
                  className="at-prev"
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={uploadedImage} alt="preview" />
                  <div className="at-prev-ov" />
                  <div className="at-prev-bar">
                    <span className="at-prev-name">{uploadedFileName}</span>
                    <button
                      className="at-rm"
                      onClick={() => {
                        setUploadedImage(null);
                        setUploadedFileName("");
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </div>

            {selectedStyleObj && (
              <div className="at-selected-preview">
                <div className="at-sp-icon">{selectedStyleObj.icon}</div>
                <div>
                  <div className="at-sp-name">{selectedStyleObj.label}</div>
                  <div className="at-sp-desc">{selectedStyleObj.desc}</div>
                </div>
              </div>
            )}

            {error && (
              <div className="at-err">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  style={{ flexShrink: 0, marginTop: 1 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <div className="at-div" />

            <button className="at-btn" onClick={handleGenerate} disabled={isGenerating || !uploadedImage}>
              {isGenerating ? (
                <>
                  <div className="at-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Generate Now
                </>
              )}
            </button>
          </aside>

          <div className="at-col-canvas">
            <div
              className="at-canvas"
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              {isGenerating && (
                <div className="at-gen-ov">
                  <div className="at-gen-anim">
                    <div className="at-gen-r1" />
                    <div className="at-gen-r2" />
                    <div className="at-gen-core">
                      <svg width="15" height="15" fill="none" stroke="var(--org)" strokeWidth="2" viewBox="0 0 24 24">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                  </div>
                  <p className="at-gen-title">Crafting your transformation</p>
                  <p className="at-gen-sub">AI is working its magic...</p>
                </div>
              )}

              {!activeImage && !isGenerating && (
                <div className="at-empty">
                  <div className="at-empty-ring">
                    <div className="at-empty-core">
                      <svg width="34" height="34" fill="none" stroke="white" strokeWidth="1" viewBox="0 0 24 24" opacity="0.65">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                  </div>
                  <p className="at-empty-title">
                    Your result
                    <br />
                    <em>appears here</em>
                  </p>
                  <p className="at-empty-sub">
                    Upload a photo
                    <br />
                    Choose a style on the right
                    <br />
                    Click generate
                  </p>
                </div>
              )}

              {activeImage && !isGenerating && (
                <div className="at-result">
                  <div className="at-result-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={activeImage.url} alt={activeImage.style} />
                    <div className="at-result-acts">
                      <button className="at-act-btn" onClick={() => download(activeImage)} title="Download">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                      </button>
                    </div>
                    <div className="at-result-wm">
                      <div className="at-wm-dot" />
                      <span className="at-wm-txt">Signature Plus Clinic</span>
                    </div>
                  </div>
                  <div className="at-result-foot">
                    <div className="at-result-sty">
                      <div className="at-result-sty-dot" />
                      <span className="at-result-sty-name">{activeImage.style}</span>
                    </div>
                    <span className="at-result-time">
                      {activeImage.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {generatedImages.length > 0 && (
              <div className="at-hist">
                <span className="at-hist-lbl">History</span>
                <div className="at-hist-sep" />
                {generatedImages.map((img) => (
                  <div
                    key={img.id}
                    className={`at-thumb${activeImage?.id === img.id ? " active" : ""}`}
                    onClick={() => setActiveImage(img)}
                    title={img.style}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={img.style} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="at-col-styles">
            <div className="at-sec-head">
              <div className="at-sec-n">02</div>
              <div>
                <div className="at-sec-title">Choose Style</div>
                <div className="at-sec-sub">Select your transformation</div>
              </div>
            </div>

            <div className="at-styles">
              {service.styles.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`at-style${selectedStyle === s.id ? " active" : ""}`}
                  onClick={() => setSelectedStyle(s.id)}
                >
                  <div className="at-style-ico">{s.icon}</div>
                  <div className="at-style-info">
                    <div className="at-style-name">{s.label}</div>
                    <div className="at-style-desc">{s.desc}</div>
                  </div>
                  <div className="at-style-chk">
                    {selectedStyle === s.id && (
                      <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>

        {cameraOpen && (
          <div
            className="at-cam-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeCamera();
            }}
          >
            <div className="at-cam-modal">
              <div className="at-cam-header">
                <span className="at-cam-title">
                  Take a <em>Photo</em>
                </span>
                <button className="at-cam-close" onClick={closeCamera}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="at-cam-view">
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  style={{ transform: facingMode === "user" ? "scaleX(-1)" : "none" }}
                  onCanPlay={() => setCameraReady(true)}
                />

                {!cameraReady && (
                  <div className="at-cam-loading">
                    <div className="at-cam-loading-ring" />
                    <span className="at-cam-loading-txt">Starting camera...</span>
                  </div>
                )}

                {cameraReady && (
                  <div className="at-cam-guide">
                    <div className="at-cam-oval" />
                    <div className="at-cam-corner tl" />
                    <div className="at-cam-corner tr" />
                    <div className="at-cam-corner bl" />
                    <div className="at-cam-corner br" />
                  </div>
                )}
              </div>

              <div className="at-cam-footer">
                <button className="at-cam-flip" onClick={flipCamera} title="Flip camera">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M1 4v6h6" />
                    <path d="M23 20v-6h-6" />
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10" />
                    <path d="M23 14l-4.64 4.36A9 9 0 0 1 3.51 15" />
                  </svg>
                </button>

                <button className="at-cam-shoot" onClick={capturePhoto} disabled={!cameraReady}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  Capture Photo
                </button>

                <div className="at-cam-spacer" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}