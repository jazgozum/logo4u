
// Method 1: In your route handler
import GeminiImageGenerator from "@/app/config/AiModelLogoGenerator";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { prompt } = await req.json();
    try {
        const result = await GeminiImageGenerator.generateImage(prompt);
        return NextResponse.json(result);
    } catch (e) {
        return NextResponse.json({ 
            error: e.message, 
            message: 'Error in AI Image Generation' 
        });
    }
}