var api_key = 'key-5e3f36f5-7d5318f0';
var domain = 'sandbox3761fa398a1c419abdb4ed70d3ff6b76.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <guptaharshit1816@gmail.com>',
  to: 'harshitgupta6942@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun'
};
 
mailgun.messages().send(data, function (error, body) {
	if(error){
		console.log(error);
	}
  console.log(body);
});

console.log("harshit");