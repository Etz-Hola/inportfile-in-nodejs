           //inport { readFile } from 'node:fs';

           //to string with port number
const { error } = require("console");
const fs = require("fs");
const path = require("path");
fs.readFile("./files/starter.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

           //or

// const fs = require("fs");
fs.readFile(path.join(__dirname, "files","starter.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});



fs.readFile("./files/lorem.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});


//Existing uncaugh errors
process.on("uncaughtException", error => {
    console.error(`there was an uncaught error: ${error}`
    ), process.exit(1);
})

console.log("Hello ....");