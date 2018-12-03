"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";

  console.log("This is what dialogflow sent")
  console.log(req.body)
  console.log("User said")
  console.log(speech)
  
  return res.json({
                    speech: speech,
                    displayText: speech,
                    source: "webhook-echo-sample"
                });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening 3.0");
});
