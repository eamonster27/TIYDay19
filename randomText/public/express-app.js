const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
, output = loremIpsum();

app.use(express.static('public'));


app.get('/lorem', function(req, resp){
  resp.send(loremIpsum({
    count: 3
    , units: 'paragraphs'
  }))
});

app.get('/lorem/:numParagraphs', function(req, resp){
  resp.send(loremIpsum({
    count: req.params.numParagraphs
    , units: 'paragraphs'
  }))
});

app.listen(3000, function(){
  console.log("Oh Hai! Check out http://0.0.0.0:3000");
});
