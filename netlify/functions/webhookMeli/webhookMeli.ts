import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const name = event.body?.length == 0 ?  'stranger' : event.body

  console.log("A la grande le puse cucas");
  console.log(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
