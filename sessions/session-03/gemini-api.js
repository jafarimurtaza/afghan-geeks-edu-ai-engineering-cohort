import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: "Translate the folllowing text into Dari: 'Hello, how are you?'",
  });

  console.log(response);
  console.log(response.text);
}

main();
