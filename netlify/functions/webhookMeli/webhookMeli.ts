import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  console.log("A la grande le puse cuca");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
