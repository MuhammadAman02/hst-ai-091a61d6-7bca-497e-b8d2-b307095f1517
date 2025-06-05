import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const EnvCheck = () => {
  const hasApiKey = !!import.meta.env.VITE_OPENAI_API_KEY;
  
  console.log("Environment check - API key present:", hasApiKey);

  if (hasApiKey) {
    return (
      <Alert className="mb-4 border-green-200 bg-green-50">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          OpenAI API key is configured and ready to use!
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="mb-4 border-amber-200 bg-amber-50">
      <AlertCircle className="h-4 w-4 text-amber-600" />
      <AlertDescription className="text-amber-800">
        <strong>Setup Required:</strong> Please create a <code>.env</code> file in your project root and add:
        <br />
        <code className="block mt-2 p-2 bg-gray-100 rounded text-sm">
          VITE_OPENAI_API_KEY=your_openai_api_key_here
        </code>
        <br />
        Get your API key from{" "}
        <a 
          href="https://platform.openai.com/api-keys" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-amber-900"
        >
          OpenAI Platform
        </a>
      </AlertDescription>
    </Alert>
  );
};

export default EnvCheck;