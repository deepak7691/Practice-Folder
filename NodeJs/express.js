

const express = require("express");
const { log } = require("console");

const app = express();  //now everything will be done on this app 

app.get("/welcome", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    })
    res.write("Welcomme !!")
    res.end();
})

app.get("/contact", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })

    res.write(JSON.stringify({
        "name" : "Deepak Kawliya",
        "location" : "Badnawar"
    }))
    res.end();
})





app.listen(3000, () => {
    console.log("Server Started on port 3000")
})