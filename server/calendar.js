// server/composables/calendar.js
const { google } = require('googleapis');
const { readFile } = require('fs').promises;

async function getAuthClient() {
  const credentials = await readFile('./client_secret_657217760301-7a9m3vhlvd9rk3s33k57sgvoosupgrsi.apps.googleusercontent.com.json');
  const { client_secret, client_id, redirect_uris, token_uri } = JSON.parse(credentials).web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Load token from the file
  try {
    const token = token_uri;
    oAuth2Client.setCredentials(JSON.parse(token));
  } catch (err) {
    console.error('Error loading token:', err.message);
  }

  return oAuth2Client;
}

async function saveEvent(eventData) {
  const auth = await getAuthClient();
  const calendar = google.calendar({ version: 'v3', auth });

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: eventData,
    });

    console.log('Event created:', response.data.htmlLink);
    return response.data;
  } catch (err) {
    console.error('Error creating event:', err.message);
    throw err;
  }
}

module.exports = { saveEvent };
