// import OpenAI from "openai"

// require("dotenv").config();

// const openAIClient = new OpenAI({
//   apiKey: process.env['OpenAI_API_KEY']
// })

// const chatCompletion = await openAIClient.chat.completions.create({
//   model : "gpt-4-turbo-preview",
//   messages : [
//     {
//       role : "system",
//       content : "You are a helpful assistant."
//     },
//     {
//       role : "user",
//       content : "What is the meaning of life?"
//     }
//   ]
// })

// const Chat = async () => {
  
//   return <span></span>
// }



// (There's seems to be no API connection?)
// const { Configuration, OpenAIApi } = require("openai")
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY
// })
// const openai = new OpenAIApi(configuration)

import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4",
  });

  console.log(completion.choices[0]);
}

main();

const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const mytext = mytextInput.value.trim();

  if (mytext) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: mytext }],
          temperature: 1.0,
          top_p: 0.7,
          n: 1,
          stream: false,
          presence_penalty: 0,
          frequency_penalty: 0,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        responseTextarea.value = data.choices[0].text;
      } else {
        responseTextarea.value = 'Error: Unable to process your request.';
      }
    } catch (error) {
      console.error(error);
      responseTextarea.value = 'Error: Unable to process your request.';
    }
  }
});