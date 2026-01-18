import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: messages,
    });

    const content = response.content[0];
    const text = content.type === "text" ? content.text : "";

    return Response.json({ message: text });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { error: "Failed to get response from Claude" },
      { status: 500 }
    );
  }
}
