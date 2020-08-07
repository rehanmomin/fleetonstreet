// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
//'npm install twilio' before running this application
  //run the code using node main\\utils\\sendsms.js 
  //change to mobile number to yours
  //API Key SK5435192a0ec5ad9451bba28d4e892a03
  //twilio-cli configuration saved to "C:\Users\rehan.momin\.twilio-cli\config.json

const accountSid = 'ACb436ec86684f8d5a1ae18bd3805d8a8f';
const authToken = '3c6406095c78c235c0699434822c345e';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Rehan is really sorry, He loves you - BestHusband.com',
     from: '+14805264166',
     to: '+919029651534'
   })
  .then(message => console.log(message.sid));
