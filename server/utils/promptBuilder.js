export const buildPrompt = ({
    topic,
    classLevel,
    examType,
    revisionMode,
    includeDiagram,
    includeChart
}) => {
    return `
    You are a STRICT JSON generator for an exam preparation system.
    
    🔺 VERY IMPORTANT:
    - Output Must be valid JSON
    - Your response will be parsed using JSON.parse()
    - INVALID JSON will cause system failure
    - Use ONLY double quotes "
    - No comments, No trailing commas
    - Escape line breaks using \\n
    - Do NOT use emojis inside text values
    
    TASK:
    Convert the given topic into exam-focused notes.
    
    INPUT:
    Topic: ${topic}
    class Level: ${classLevel || "Not specified"}
    Exam Type: ${examType || "General"}
    Revision Mode: ${revisionMode ? "ON" : "OFF"}
    Include Diagram: ${includeDiagram ? "Yes" : "No"}
    Include Charts: ${includeChart ? "Yes" : "No"}
    
    GLOBAL CONTENT RULES:
    - Use clear, simple, exam-oriented language
    - Notes MUST be Markdown formatted
    - Headings and bullets points only
    
    REVISION MODE RULES (CRITICAL):
    - If REVISION MODE is ON:
     - Notes must be VERY SHORT
     - One-line answers only
     - Definitions, formulas, keywords
     - No paragraphs
     -No explanations
     - Content must feel like:
      - last-day revision
      - 5-minute exam cheat sheet
     - revisionPoints MUST summarize ALL important facts
    
    - If REVISION MODE is OFF:
      - Notes must be DETAILED but exam focused
      - Each topic should includeL
       - definition
       - short explpanation
       - example (if applicable)
      - Paragrapg leength : max 2-4 lines
      - No storytelling, no extra theory
      
      IMPORTANCE RULES:
      - Divide sub-topics into THREE categories:
       - ⭐ very important topics
       - ⭐⭐ Important Topics
       - ⭐⭐⭐ Frequently asked topics
      - All three categories must be present
      - Base importance on exam frequency and weightage
     
      DIAGRAM RULES:
      - If INCLUDE DIAGRAM is YES:
       - diagram.data MUST be a SINGLE STRING
       - valid Mermaid syntax only
       - wrap every node in square brackets [] 
       - DO NOT use special characters inside labels
      -if INCLUDE DIAGRAM IS NO:
       - diagram.data MUST be ""
       
      
    CHART RULES (RECHARTS):
    - If INCLUDE CHARTS is YES:
     - charts array MUST NOT BE EMPTY
     -Generate at least One chart
     - Choose chart based on topic type:
      - theory topic -> bar or pie (importance/weightage)
      - process topic -> bar or line (steps / stages)
     -Use numeric value ONLY
     -Labek must be short and exam-oriented
    - If INCLUDE CHARTS IN NO:
     - charts MUST be []
     
    CHART TYPES ALLOWED:
    - bar
    - line
    - pie
    
    CHART OBJECT FORMATE:
    { 
      "type": "bar | line | pie",
      "title": "string,
      "date": [
      {"name" : "string", "value": 10 }
      ]
     }
      
    STRICT JSON FORMATE (CO NOT CHANGE):
    
    {
     "subTopics": {
      "⭐" : []
      "⭐⭐": []
      "⭐⭐⭐" : []
     },
     "importance" : "⭐ | ⭐⭐ | ⭐⭐⭐",
     "notes": "string",
     "revisionPoints": [],
     "questions": {
      "short": [],
      "long": []
      "diagram": ""
      },
      "diagram": {
       "type": "flowchart | graph | process",
       "data": ""
       },
       "charts": []
    }
    
    RETURN ONLY VALID JSON.
    `;
};