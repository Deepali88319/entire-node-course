const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const listNotes = () =>{
    console.log(chalk.bgGreen("Your Notes!"));
    const notes = loadNotes();
     notes.forEach((note)=>{
        console.log(note.title);
      });
      
}
const readNotes = (title) =>{
   const notes = loadNotes();
   const foundNote = notes.find((note)=>{
    return note.title === title;
   });
   if(foundNote){
   console.log(chalk.blue(foundNote.title));
   console.log(foundNote.body);
   }
   else{
    console.log(chalk.bgRed("No Note Found!"));
   }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = function(title){
    console.log(title);
    const existingNotes = loadNotes();
    const updatedNotes = existingNotes.filter(function(note){
        return note.title !== title
    })
    if(existingNotes.length >  updatedNotes.length){
        console.log(chalk.bgGreen("Note Removed!"));
  
       }
       else{
        console.log(chalk.bgRed("No note found!"));
       }
    saveNotes(updatedNotes);
   
}

const loadExistingNotes = function(){
    const jsonData = fs.readFileSync('notes.json');
    const stringifiedJsonData = JSON.stringify(jsonData);
    return JSON.parse(stringifiedJsonData);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}