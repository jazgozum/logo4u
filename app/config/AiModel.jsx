import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
export const AIDesignIdea = ai.chats.create({
  model: "gemini-2.0-flash",
  config: {
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      properties: {    // Define properties directly at this level
        ideas: { 
          type: "array",
          items: {
            type: "string",
          } 
        },
      },
      required: ["ideas"],
    },
  },
  history: [
    {
      role: "user",
      parts: [{ text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create a logo for logo title/brandname: Manila Spice with the description of: Create a minimalist and modern logo design that is clean, simple, and visually appealing. The logo should be easy to recognize and remember, and it should be versatile enough to be used in a variety of contexts. Use a combination of typography and simple geometric shapes to create a visually striking and memorable design. The logo should be timeless and elegant, and it should convey a sense of professionalism and sophistication.. The brand name display in bold .Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format. the answer will  json will be ideas no prompt just json only" }],
    },
    {
      role: "model",
      parts: [{ text: "{\n  \"ideas\": [\n    \"Geometric chili pepper mascot\",\n    \"Abstract Philippine eagle geometry\",\n    \"Stylized wok steam shape\",\n    \"Minimalist spice pattern symbol\",\n    \"Sun and spice element\"\n  ]\n}" }],
    },
  ],
});

export const AILogoPrompt = ai.chats.create({
  model: "gemini-2.0-flash",
  config: {
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      properties: {    // Define properties directly at this level
        prompt: { 
          type: "array",
          items: {
            type: "string",
          } 
        },
      },
      required: ["prompt"],
    },
  },
  history: [
    {
      role: "user",
      parts: [{ text: "Generate a text prompt to create Logo for Logo Title/Brand name : Vintage Custom Logos,with description: animals, with Color combination of Let Us Select, also include the Vintage bear illustration circle and include Vintage Custom Logos design idea and Referring to this Logo Prompt:Generate a vintage, hand-drawn logo in a circular format. The logo should feature a central illustration, such as a symbol, icon, or image related to the brands identity. The illustration should be detailed and stylized, with a focus on linework and shading. The logo should also include the brand name, written in a vintage, decorative font. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition and quality.  Give me result in JSON portal with prompt field only" }],
    },
    {
      role: "model",
      parts: [{ text: "{\n  \"prompt\": \"Generate a vintage, hand-drawn logo in a circular format. The logo should prominently feature a detailed and stylized hand-drawn vintage bear illustration in the center, with careful linework and shading to create depth. Encircling the bear illustration should be the brand name 'Vintage Custom Logos' written in a vintage, decorative font that complements the hand-drawn style. The overall aesthetic should be retro and nostalgic, evoking a sense of tradition and quality. The color palette will be determined to best suit the vintage feel.\"\n}" }],
    },
  ],
});
