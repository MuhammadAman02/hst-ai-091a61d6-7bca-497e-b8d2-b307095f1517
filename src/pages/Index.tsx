import ChatBot from "@/components/ChatBot";
import EnvCheck from "@/components/EnvCheck";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-4xl p-4">
        <EnvCheck />
      </div>
      <ChatBot />
    </div>
  );
};

export default Index;