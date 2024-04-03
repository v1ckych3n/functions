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


const form = document.getElementById('chat-form');
const mytextInput = document.getElementById('mytext');
const responseTextarea = document.getElementById('response');


const API_KEY = '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';


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
          // messages: [{ role: 'user', content: mytext }],
          messages: [{ role:'user', content: `'${mytext}'`}],
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
        responseTextarea.value = data.choices[0].message.content;
      } else {
        responseTextarea.value = 'Error: Unable to process your request.';
      }
    } catch (error) {
      console.error(error);
      responseTextarea.value = 'Error: Unable to process your request.';
    }
  }
});