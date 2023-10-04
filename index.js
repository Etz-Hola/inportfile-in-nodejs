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
console.log("am still trying to understand this  ....");




//this is to write or or add a file to the existing file.
fs.writeFile(path.join(__dirname,"files", 'text.txt'), `Here in DLTAfrica it's a new dawn`, (err) => {
  if(err) throw err;
  console.log('Write completed');
})


fs.readFile("./files/text.txt", "utf8", (error, data) =>{
  if (error) throw error;
  console.log(data);
})

fs.appendFile(path.join(__dirname,"files", 'text.txt'), 'Tes')