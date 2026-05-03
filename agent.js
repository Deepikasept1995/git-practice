import "dotenv/config";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createAgent } from "langchain";
import { tools } from "./tools.js";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    temperature: 0,
});

const agent = createAgent({
    model,
    tools,
    systemPrompt: "You are an helpful assistant that uses tools when needed"
});

const result = await agent.invoke({
    messages: [
        {
            role: "user",
            content: "Count of all orders"
        },
    ]
});

console.log(result.messages[result.messages.length - 1].content);