var express = require('express');
var app = express();
var bodyParser = require("body-parser");

/*1
console.log("hello world");
*/

/*2
app.get("/", function(req, res) {
  res.send("Hello Express");
});
*/

/*3
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
*/

/*4
app.use("/public", express.static(__dirname + "/public"));
*/

/*5
app.get('/json',function(req,res) {
  
    let message= "Hello json";
    res.status(200).setHeader('Content-Type', 'application/json');
    
    res.json({"message": message});
    
    });
*/

/*6
app.get("/json", (req, res) => {
     if(process.env.MESSAGE_STYLE === "uppercase"){
       res.json({"message" : "HELLO JSON"});
     }
     res.json({"message" : "Hello json"});
   });
*/

 /*7
 app.use( function logger(req, res, next) { 
   console.log("" + req.method + " " + req.path + " - " + req.ip); 
   next(); 
 });
 */

/* 8
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);
*/

/*9
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});
*/

/*10
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
});
*/

/*11
app.use(bodyParser.urlencoded({ extended: false }));
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/name",function(req,res){

var jsonObj=req.body.first+" "+req.body.last;
res.send({name:jsonObj});
console.log(req.body.first+" "+req.body.last);

});

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname + "/views/index.html"));
});































 module.exports = app;
