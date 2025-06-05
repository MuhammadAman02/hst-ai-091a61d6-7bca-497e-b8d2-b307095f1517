export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
  }>;
}

export const sendMessageToOpenAI = async (messages: ChatMessage[]): Promise<string> => {
  console.log("Sending messages to OpenAI:", messages);
  
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    console.error("OpenAI API key not found");
    throw new Error("API key not configured. Please add VITE_OPENAI_API_KEY to your .env file.");
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    console.log("OpenAI API response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", errorData);
      
      if (response.status === 401) {
        throw new Error("Invalid API key. Please check your OpenAI API key.");
      } else if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      } else if (response.status === 500) {
        throw new Error("OpenAI service is temporarily unavailable.");
      } else {
        throw new Error(`OpenAI API error: ${response.status}`);
      }
    }

    const data: OpenAIResponse = await response.json();
    console.log("OpenAI API response data:", data);

    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      console.error("Invalid response format from OpenAI:", data);
      throw new Error("Invalid response format from OpenAI API");
    }

    const messageContent = data.choices[0]?.message?.content;
    
    if (!messageContent) {
      console.error("No message content in OpenAI response:", data);
      throw new Error("No response content received from OpenAI");
    }

    console.log("Successfully received OpenAI response:", messageContent);
    return messageContent;

  } catch (error) {
    console.error("Error in sendMessageToOpenAI:", error);
    
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Unknown error occurred while communicating with OpenAI");
    }
  }
};