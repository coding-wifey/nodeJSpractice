// // let obj = {
// //   name: 'Kate'
// // };
// // let stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);

// let personString = '{"name": "Andrew", "age": 27}';
// let person       = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body:  'Some body' 
};

//code to write a note
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


//code to read a note
let noteString = fs.readFileSync('notes.json');
let note       = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title)