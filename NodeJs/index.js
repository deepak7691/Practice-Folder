
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/welcome") && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.write("Welcome !")
        res.end();
    } else if (req.url.startsWith("/contact") && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.write(JSON.stringify(
            [{
                "name": "Deepak Kawliya",
                "contact": "7691991312"
            },
            {
                "name": "Robin Pandey",
                "contact": "7000492993"
            },
            {
                "name": "Rahul Modi",
                "contact": "7000495545"
            }
        ]))
        res.end();
    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        })
        res.write("Request url not found")
        res.end()
    }
})

server.listen(3000, () => {
    console.log("server started")
})


//The HTTP module in Node.js uses a callback-based API for handling incoming requests, which often
//results in a lot of if-else statements to handle different HTTP methods and paths. This can make code 
// difficult to read and maintain, especially for larger projects.

//In addition, the HTTP module does not provide built-in support for parsing request bodies, such as JSON or URL-encoded data. 
// Instead, you need to manually read the request stream and parse the data yourself. This can be a bit cumbersome and 
// error-prone, especially for larger or more complex requests.

//To overcome these limitations, many developers choose to use third-party frameworks or libraries, such as 
//Express or Koa, which provide a more streamlined API for building HTTP servers in Node.js. These frameworks
// typically provide middleware for parsing request bodies, as well as more advanced routing and error handling features.