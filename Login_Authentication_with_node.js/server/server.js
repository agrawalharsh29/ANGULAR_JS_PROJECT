var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
app.use(bodyParser.urlencoded({ extended: true })); 
const cors = require('cors')
const path = require('path');
const port = 3000;
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
app.get('/',(req,res) =>{
	res.send("welcome to node server");
})
app.post('/login', (req, res) => {
  var user = req.body.username;
  var pwd = req.body.password;
  if(user == "harsh" && pwd == "agrawal")
  {
  	res.send("harsh");
  	// console.log("logged");
  }
  else if(user=="abc" &&  pwd=="123")
  {
  	res.send("abc");
  }
  else
  {
  	res.send("failed");
  }
  // res.send("hello");
  })
app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});