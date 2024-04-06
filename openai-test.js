import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Write a tagline for an ice cream shop.'
});
  });

  console.log(completion.choices[0]);
}
main();