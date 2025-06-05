import { Bot, Sparkles } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="flex items-center gap-3 p-6 border-b border-gray-200">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          AI Assistant
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </h1>
        <p className="text-sm text-gray-500">Powered by OpenAI</p>
      </div>
    </div>
  );
};

export default ChatHeader;