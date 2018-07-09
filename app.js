console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const _     = require('lodash');
const notes = require('./notes.js');


// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
let filteredArray = _.uniq(['Kate', 1, 'Kate', 2, 3, 4, 4]);
console.log(filteredArray);

// console.log('Result:', notes.add(9, -2));


// let res     = notes.addNote();
// console.log(res);  
/*let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} .` , function (err) {
  if (err) {
   console.log('Unable to write the file');
  }
});
*/