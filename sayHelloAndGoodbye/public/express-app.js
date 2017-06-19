const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/hello/:user', function(req, resp){
  resp.send('Hello there, ' + req.params.user);
});

app.get('/goodbye/:user', function(req, resp){
  resp.send("See you later, " + req.params.user);
});

app.listen(3000, function(){
  console.log("Oh Hai! Check out http://0.0.0.0:3000");
});
