// server/index.js
const express = require('express');
const { createServer } = require('http');
const postmark = require('postmark');

const app = express();
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
app.use(express.json());

app.post('/api/email', async (req, res) => {
  try {
    const emailData = req.body;
    const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);
    console.log(emailData)
    const result = await client.sendEmail(emailData);
    console.log(result)
    res.json(200);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error Something is wrong', statusMessage: 'test error' });
  }
});

const server = createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});