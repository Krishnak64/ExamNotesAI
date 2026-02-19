import dotenv from "dotenv";
dotenv.config();


const Gemini_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"

export const generateGeminiResponse = async (prompt) => {

    try{
        const response = await fetch(`${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        })

        if (!response.ok) {
            const err = await response.text();
            throw new Error(err)
        }

        const data = await response.json()

        const text = 
        data.candidates?.[0]?.content?.parts?.[0]?.text;

        if(!text) {
            throw new Error("No text returned from Gemini")
        }

        const cleanText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

        return JSON.parse(cleanText)
    }
     catch(err) {
        console.error("Gemini Fetch:", err.message);
        throw new Error("Gemini API Fetch failed")
     }   
}

// export const generateGeminiResponse = async (prompt, retries = 3) => {
//     try {
//         const response = await fetch(
//             `${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     contents: [
//                         {
//                             parts: [{ text: prompt }]
//                         }
//                     ]
//                 })
//             }
//         );
// 
//         if (!response.ok) {
//             const errText = await response.text();
// 
//             // If 503 → retry
//             if (response.status === 503 && retries > 0) {
//                 console.log("Retrying Gemini... Attempts left:", retries);
//                 await new Promise(res => setTimeout(res, 2000));
//                 return generateGeminiResponse(prompt, retries - 1);
//             }
// 
//             throw new Error(errText);
//         }
// 
//         const data = await response.json();
// 
//         const text =
//             data.candidates?.[0]?.content?.parts?.[0]?.text;
// 
//         if (!text) {
//             throw new Error("No text returned from Gemini");
//         }
// 
//         return text.trim();   // 🚀 DO NOT JSON.parse here
// 
//     } catch (err) {
//         console.error("Gemini Error:", err.message);
//         throw err;
//     }
// };
