import { useState } from "react";
import { Card } from "@/components/ui/card";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { Message } from "@/types/chat";
import { sendMessageToOpenAI, ChatMessage } from "@/lib/openai";
import { toast } from "sonner";

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("ChatBot rendered with", messages.length, "messages");

  const handleSendMessage = async (content: string) => {
    console.log("Sending message:", content);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Convert messages to OpenAI format
      const chatMessages: ChatMessage[] = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      // Call OpenAI API directly
      const aiResponse = await sendMessageToOpenAI(chatMessages);
      console.log("Received AI response:", aiResponse);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      
      let errorContent = "Sorry, I'm having trouble connecting right now.";
      
      if (error instanceof Error) {
        if (error.message.includes('API key not configured')) {
          errorContent = "Please configure your OpenAI API key in the .env file (VITE_OPENAI_API_KEY).";
        } else if (error.message.includes('OpenAI API error')) {
          errorContent = "There was an error with the OpenAI API. Please check your API key and try again.";
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorContent,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl h-screen flex flex-col p-4">
      <Card className="flex-1 flex flex-col shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <ChatHeader />
        <ChatMessages messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </Card>
    </div>
  );
};

export default ChatBot;