const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', function(request, response){
  response.send('<html><head><link rel="stylesheet" href="/app.css"></head><body><a href="/">Hello World</a></body></html>');
})

app.get('/yolo', function(request, response) {
  response.send('<html><body><a href="/yolo">Yoloooo</a></body></html>');
})

app.listen(3000, function(){
  console.log("Oh Hai! Check out http://0.0.0.0:3000");
})
