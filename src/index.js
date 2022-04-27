// Import builtin NodeJS modules to instantiate the service
const https = require("https");
const fs = require("fs");
// require('dotenv')
const PORT=process.env.PORT||4001

// Import the express module
const express = require("express");

// Instantiate an Express application
const app = express();

// Create a NodeJS HTTPS listener on port 4000 that points to the Express app
// Use a callback function to tell when the server is created.
const options={
    key:fs.readFileSync("./private/key.pem").toString(),
    cert:fs.readFileSync("./private/cert.pem").toString()
}
https
  .createServer(options, app)
  .listen(PORT, ()=>{
    // console.log({options})16
    console.log(`server is runing at port ${PORT}`)
  });

// Create an try point route for the Express app listening on port 4000.
// This code tells the service to listed to any request coming to the / route.
// Once the request is received, it will display a message "Hello from express server."
app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})