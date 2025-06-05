// OpenAI API configuration and utility functions
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const sendMessageToOpenAI = async (messages: ChatMessage[]): Promise<string> => {
  console.log('Sending messages to OpenAI:', messages);
  
  if (!OPENAI_API_KEY) {
    console.error('OpenAI API key not found in environment variables');
    throw new Error('OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env file.');
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('OpenAI response:', data);
    
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
};