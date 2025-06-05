# AI Chatbot with OpenAI Integration

A beautiful, modern chatbot interface that integrates with the OpenAI API, built with React, TypeScript, and Tailwind CSS.

## Features

- 🤖 Real-time AI chat powered by OpenAI GPT-3.5-turbo
- 💬 Beautiful message bubbles with smooth animations
- ⚡ Typing indicators and loading states
- 📱 Fully responsive design
- 🎨 Modern gradient backgrounds and clean UI
- ⚠️ Comprehensive error handling
- 🔧 Environment variable configuration

## Setup Instructions

### 1. Get your OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (it starts with `sk-`)

### 2. Configure Environment Variables

Create a `.env` file in your project root and add:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

**Important:** 
- Replace `your_openai_api_key_here` with your actual OpenAI API key
- Never commit your `.env` file to version control
- The key must start with `VITE_` to be accessible in the browser

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ChatBot.tsx          # Main chat interface
│   ├── ChatHeader.tsx       # Chat header with AI info
│   ├── ChatMessages.tsx     # Message list container
│   ├── ChatInput.tsx        # Message input form
│   ├── MessageBubble.tsx    # Individual message component
│   ├── TypingIndicator.tsx  # Loading animation
│   └── EnvCheck.tsx         # Environment validation
├── lib/
│   └── openai.ts           # OpenAI API integration
├── types/
│   └── chat.ts             # TypeScript interfaces
└── pages/
    └── Index.tsx           # Main page
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENAI_API_KEY` | Your OpenAI API key | Yes |

## Troubleshooting

### "API key not configured" Error
- Ensure your `.env` file exists in the project root
- Verify the variable name is exactly `VITE_OPENAI_API_KEY`
- Restart your development server after adding the key

### "Invalid API key" Error
- Double-check your API key is correct
- Ensure you have credits available in your OpenAI account
- Verify the key hasn't been revoked

### Rate Limit Errors
- You've exceeded OpenAI's rate limits
- Wait a few minutes before trying again
- Consider upgrading your OpenAI plan for higher limits

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **OpenAI API** - AI responses
- **Lucide React** - Icons
- **Shadcn/ui** - UI components

## License

This project is open source and available under the MIT License.