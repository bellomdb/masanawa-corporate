import { GoogleGenerativeAI } from '@google/generative-ai';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { projectName, projectBrief } = body;
    if (!projectName) {
      return new Response(JSON.stringify({ error: "Project name is required" }), { status: 400 });
    }
    const apiKey = "AIzaSyBovkdEhTmHb38mhAacWyfRm1II7z05Ge4";
    if (!apiKey) ;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `
            You are an expert content strategist and copywriter for a civic tech and digital services company called Masanawa.
            
            I need you to generate content for a new project called "${projectName}".
            Brief/Context: ${projectBrief || "No specific brief provided, please infer from the name or generate generic placeholder content for a civic tech project."}

            Please generate a JSON object with the following fields:
            1. "description": A compelling 1-2 sentence description for a card (max 150 chars).
            2. "content": A full, engaging markdown article describing the project. Use H2 (##) for sections. Include sections like "Overview", "Key Features", "Impact", and "Technology". Make it professional, visionary, and impact-oriented.
            3. "seo_title": An SEO-optimized title (max 60 chars).
            4. "seo_description": An SEO-optimized meta description (max 160 chars).
            5. "slug": A URL-friendly slug based on the name.
            6. "icon_letter": The first letter of the project name.
            7. "icon_color": A hex color code suitable for this project (vibrant, e.g., purple, teal, gold, blue, indigo).

            Return ONLY the JSON string, no markdown formatting around it.
        `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const generatedData = JSON.parse(cleanText);
    return new Response(JSON.stringify(generatedData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error generating content:", error);
    return new Response(JSON.stringify({ error: "Failed to generate content" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
