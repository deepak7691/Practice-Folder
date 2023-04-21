const express = require("express");
//Initiate an app
const app = express();

//enhanced the capabilities of express
app.use(express.json())

//Creating Routes in Express
// app.<http-verb>(path,callback)
//When Get Method is hit on / route then execute the callback
app.get("/", function (req, res) {
  //res.send
  // 1. It automatically Identifies the type of the content that you are sending
  //Based on the content it appends the Content-Type Header
  //Ends the response
  //By Default Status Code is 200
  res.send("Welcome to Dominos");
});

app.get("/contact", function (req, res) {
  //In res.send you need not to pass string everytime
  //Rather Pass the required data and it will decide the type for you
  
//   res.send({
//     name : "Deepak",
//     contact: "7000492993",
//   });

console.log("request Url" , req.url)
console.log("Name param" , req.query.name)
console.log("City" , req.query.city)

  
// custom headers 
// heaers always be set before sending the response
// res.set({
//     "x-newton-school" : "Some value"
// })
  //To Change The Status Code

  //also if we stringify, the data will be only string , if we directly pass it automatically update what ever we pass

  //override the satus
  res.status(201).send({
    name : "Deepak",
    contact : "7000492993",
  })
});

app.get("/posts/:postId" , (req, res) =>{
    res.send(`Post Id is ${req.params.postId}`)
})

app.post("/users" , (req, res) =>{
    res.send(`My name is  ${req.body.name}  `)
})

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
  });
  

//Start The server
app.listen(3000, () => {
  console.log("Application started on 3000");
});