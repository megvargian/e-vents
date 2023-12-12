// server/index.js
const express = require('express');
const { createServer } = require('http');
const { saveEvent } = require('./calendar');

const app = express();
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
app.use(express.json());

app.post('/api/save-event', async (req, res) => {
  try {
    const eventData = req.body;
    console.log(req.body) // Make sure to validate and sanitize the data
    const savedEvent = await saveEvent(eventData);
    console.log(savedEvent)
    res.json(savedEvent);
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