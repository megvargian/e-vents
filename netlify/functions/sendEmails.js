const postmark = require('postmark');

exports.handler = async function (event) {
  const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY_PROD);
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
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error }),
    };
  }
};