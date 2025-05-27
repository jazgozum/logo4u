// @/app/config/GeminiImageGenerator.js
import { GoogleGenAI, Modality } from "@google/genai";

class GeminiImageGenerator {
    constructor() {
        this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_IMG_API_KEY });
    }

    async generateImage(prompt) {
        try {
            const response = await this.ai.models.generateContent({
                model: "gemini-2.0-flash-preview-image-generation",
                contents: prompt,
                config: {
                    responseModalities: [Modality.TEXT, Modality.IMAGE],
                },
            });

            let generatedText = "";
            let imageBase64 = "";

            for (const part of response.candidates[0].content.parts) {
                if (part.text) {
                    generatedText = part.text;
                } else if (part.inlineData) {
                    imageBase64 = part.inlineData.data;
                }
            }

            return {
                success: true,
                text: generatedText,
                imageBase64: imageBase64,
                timestamp: new Date().toISOString()
            };

        } catch (error) {
            console.error('Gemini generation error:', error);
            throw new Error(`Failed to generate image: ${error.message}`);
        }
    }
}

export default new GeminiImageGenerator();