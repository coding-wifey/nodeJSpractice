console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const notes = require('./notes.js');

console.log('Result:', notes.add(9, -2));


// let res     = notes.addNote();
// console.log(res);  
/*let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} .` , function (err) {
  if (err) {
   console.log('Unable to write the file');
  }
});
*/