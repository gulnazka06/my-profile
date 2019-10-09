const express = require('express')
const app = express()
const port = 4204

app.use('/', express.static('dist'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/dist/index.html');
});
app.get('/favicon.png', function(req, res){
  res.sendfile(__dirname + '/dist/favicon.png');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
