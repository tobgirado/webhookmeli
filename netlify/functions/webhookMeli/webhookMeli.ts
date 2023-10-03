import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  console.log(event.body);
  return {
    statusCode: 200
  }
}
