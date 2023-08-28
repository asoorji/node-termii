require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const messageText = 'Votar notifs!'; 

const recipients = [
    '+2348129976178', '+16145722962', 
  ];

recipients.forEach(recipient => {
  client.messages.create({
    body: messageText,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:' + recipient
  })
  .then(message => console.log(`Message sent to ${recipient}: ${message.sid}`))
  .catch(error => console.error(`Error sending message to ${recipient}: ${error.message}`));
});