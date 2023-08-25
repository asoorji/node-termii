require('dotenv').config()
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

console.log('token', process.env.ACCOUNT_SID)
console.log('token', process.env.AUTH_TOKEN)

client.messages
    .create({
        body: 'I will not be small',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+2348129976178'
    })
    .then(message => console.log(message.sid))
