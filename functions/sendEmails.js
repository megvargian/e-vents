const { ServerlessFunction } = require('@netlify/functions');
const postmark = require('postmark');

const handler = async (event) => {
  const client = new postmark.ServerClient("c42bff0c-d914-4427-8b33-4aac648e2c83");

  try {
    const { body } = event;
    const { From, To, Subject, TextBody } = JSON.parse(body);

    const message = {
      From,
      To,
      Subject,
      TextBody
    };

    const result = await client.sendEmail(message);
    console.log(message)
    console.log(result)
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

module.exports = new ServerlessFunction(handler);
