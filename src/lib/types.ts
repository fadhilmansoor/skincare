// src/lib/types.ts

export interface HistoryPart {
  text?: string;
  image?: string;
}

export interface HistoryItem {
  role: "user" | "model";
  parts: HistoryPart[];
}