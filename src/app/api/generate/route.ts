import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    try {
        const { jobDescription } = await request.json();

        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
            {
                role: "system",
                content: "You are an expert job application assistant. Your task is to analyze job descriptions and create: 1) A structured job summary with key requirements and responsibilities, 2) A professional cover letter template that applicants can customize, and 3) A compelling Upwork proposal that stands out and immediately impresses clients with relevant skills and experience. Provide your response as a JSON object with 'summary', 'coverLetter', and 'upworkProposal' fields. Ensure the content is top-notch, unique, and human-like, with important points highlighted."
            },
            {
                role: "user",
                content: `Please analyze this job description and provide your response in JSON format with the following structure:
          {
            "summary": "A concise job summary in markdown format with sections for Position Overview, Key Requirements, Key Points, main, focues and Responsibilities",
            "coverLetter": "A professional cover letter template that addresses the key requirements",
            "upworkProposal": "An eye-catching Upwork proposal that stands out from competitors, demonstrates understanding of the project, highlights relevant skills/experience, and includes a compelling call to action. The proposal should be conversational yet professional, show enthusiasm, and address client pain points."
          }
          
          Job Description:
          ${jobDescription}`
            }
            ],
            temperature: 0.7,
            max_tokens: 2500,
            response_format: { type: "json_object" },
        });

        // Extract content from response
        const content = JSON.parse(response.choices[0].message.content || '{}');

        return NextResponse.json({
            summary: content.summary || "Failed to generate summary.",
            coverLetter: content.coverLetter || "Failed to generate cover letter.",
            upworkProposal: content.upworkProposal || "Failed to generate Upwork proposal."
        });
    } catch (error: unknown) {
        console.error('OpenAI API error:', error);
        return NextResponse.json(
            { error: 'Failed to generate content' },
            { status: 500 }
        );
    }
}