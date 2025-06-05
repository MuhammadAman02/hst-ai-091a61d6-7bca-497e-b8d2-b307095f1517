# ChatBot Setup Guide

## Environment Variables Setup

To use the OpenAI API, you need to set up your API key as an environment variable.

### Step 1: Create a .env file

Create a `.env` file in your project root directory (same level as package.json):

```
VITE_OPENAI_API_KEY=your_actual_openai_api_key_here
```

### Step 2: Get your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in to your account
3. Click "Create new secret key"
4. Copy the generated key
5. Replace `your_actual_openai_api_key_here` in your .env file with the actual key

### Step 3: Restart your development server

After creating the .env file, restart your development server:

```bash
npm run dev
```

### Important Notes

- Never commit your .env file to version control
- The .env file should be added to your .gitignore
- In Vite, environment variables must be prefixed with `VITE_` to be accessible in the browser
- Keep your API key secure and don't share it publicly

### Troubleshooting

If you're still having issues:

1. Make sure the .env file is in the project root
2. Ensure there are no spaces around the = sign
3. Restart your development server after making changes
4. Check the browser console for any error messages