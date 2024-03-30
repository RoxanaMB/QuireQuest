const OpenAI = require('openai')

const fireworks = new OpenAI({
  baseURL: 'https://api.fireworks.ai/inference/v1',
  apiKey: 'GyVeGSNGrzMxTAGeY2FLaxbAG3OJAOoj4lwSGZekzBMX0Y6n'
})

// Request the Fireworks API for the response
async function start() {
  const messages = [{ role: 'user', content: 'Hola' }]

  const response = await fireworks.chat.completions.create({
    model: 'accounts/fireworks/models/llama-v2-13b-chat',
    messages: messages,
    max_tokens: 1000,
    temperature: 0.75,
    top_p: 1,
    frequency_penalty: 1,
  })

  const completion = response.choices[0].message.content
  console.log(completion)
}

start()