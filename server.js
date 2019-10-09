const express = require('express')
const app = express()
const port = 4204

app.use('/img', express.static('dist/img'));
app.use('/css', express.static('dist/css'));
app.use('/js', express.static('dist/js'));

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
