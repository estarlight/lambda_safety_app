// from twilio.twiml.VoiceResponse import VoiceResponse, Say
// import {  VoiceResponse } from 'twilio/lib/twiml/VoiceResponse';

var twilio = require('twilio');


const accountSid = PROCESS.ENV.ACCOUNT_SID;
const authToken = PROCESS.ENV.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.handler = function(event, context) {

function location(){
    var latitude = '34.180793';
    var longitude = '-118.30916250000001';

    return `I am in trouble. Please send help. My location is https://maps.google.com/?q=${latitude},${longitude}`;

}

client.messages
  .create({
     body: location(),
     from: PROCESS.ENV.TWILIO_NUMBER,
     to: 'insert phone number'
   })
  .then(message => console.log(message.sid))
  .done();

client.calls
      .create({
         url: PROCESS.ENV.TWILIO_URL,
         to: 'insert phone number',
         from: PROCESS.ENV.TWILIO_NUMBER
       })
      .then(call => console.log(call.sid))
      .done();
}