
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI assistant for Ammar Ali, a professional UI/UX designer. 
Your goal is to represent Ammar Ali and answer questions about his design philosophy, 
his portfolio (Nexus Fintech, EcoSphere, Lumina, PureFlow), and his skills.
Ammar is an expert in Figma, UX Research, and Design Systems. 
Keep your answers professional, creative, and concise. 
If someone asks about hiring, tell them to use the contact form below.
`;

export async function askAmmarBot(question: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    return response.text || "I'm having trouble thinking right now. Please try again or reach out to Ammar directly!";
  } catch (error) {
    console.error("AI Error:", error);
    return "I couldn't process that. Ammar is busy designing something great!";
  }
}
