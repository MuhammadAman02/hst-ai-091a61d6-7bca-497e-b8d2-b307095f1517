import { Message } from "@/types/chat";
import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser 
          ? "bg-blue-500" 
          : "bg-gradient-to-r from-purple-500 to-pink-500"
      }`}>
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${
        isUser ? "text-right" : "text-left"
      }`}>
        <div className={`inline-block p-3 rounded-2xl shadow-sm ${
          isUser
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-gray-100 text-gray-800 rounded-bl-md"
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-1 px-1">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;