// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACb436ec86684f8d5a1ae18bd3805d8a8f';
const authToken = '3c6406095c78c235c0699434822c345e';
const client = require('twilio')(accountSid, authToken);

client.messages.list({limit: 1})
               .then(messages => messages.forEach(m => {
                    client.messages(m.sid)
                    .fetch()
                    .then(message => {
                        //to only get the number otp 
                        var otp = message.body.replace(/[a-zA-Z]/g, '').replace(":","").trim()
                        console.log(" Message To:" + message.to + " Message Body: "+otp)
                    });
                   }));