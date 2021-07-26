//Send mail by nodemailer
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "qs4533.pair.com",
  port: 25, //port
  use_authentication: false, //not authenticate
  tls: {
    rejectUnauthorized: false, //do not fail on invalid certs
  },
});

var mailOptions = {
  from: "apps.helpdesk@abl.atlas.pk",
  to: "kunwar.nabeel@abl.atlas.pk",
  subject: "TEST from nodemailer",
  text: "TEST MAIL BODY",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  } else {
    console.log("Message sent: " + info.response);
  }
});
