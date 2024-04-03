import OpenAI from "openai"

require("dotenv").config();

const openAIClient = new OpenAI({
  apiKey: process.env['OpenAI_API_KEY']
})

const chatCompletion = await openAIClient.chat.completions.create({
  model : "gpt-4-turbo-preview",
  messages : [
    {
      role : "system",
      content : "You are a helpful assistant."
    },
    {
      role : "user",
      content : "What is the meaning of life?"
    }
  ]
})

const Chat = async () => {
  
  return <span></span>
}
