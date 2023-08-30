require('dotenv').config()
var request = require('request');
var data = {
        "to": "+2348144092733",
        "from": "Orji",
        "sms": "VotarHQ Testing",
        "type": "plain",
        "channel": "generic",
        "api_key": process.env.API_KEY,
};
var options = {
'method': 'POST',
'url': 'https://termii.com/api/sms/send',
'headers': {
'Content-Type': ['application/json', 'application/json']
},
body: JSON.stringify(data)

};
request(options, function (error, response) {
if (error) throw new Error(error);
console.log(response.body);
});