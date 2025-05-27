import { AILogoPrompt } from "@/app/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    const {prompt}=await req.json();

    try{
        const result=await AILogoPrompt.sendMessage({
            message:prompt,
        })
        return NextResponse.json(JSON.parse(result.text))
    }
    catch(e)
    {
        return NextResponse.json({error:e , message:'Error in AI Design Idea'})
    }

}