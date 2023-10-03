// const fs = require('fs') //  to use 'fs' module, we're importing this node module
//fs.writeFileSync('notes.txt','This file was created by node.js')

//fs.appendFileSync('notes.txt',' ,data to append')

//==========================================================//
// const validator = require('validator') //importing npm module
// const getNotes = require('./notes.js') // importing our own file

// const msg = getNotes()

// console.log(msg)

// console.log(validator.isEmail('deepali@example.com'))
// console.log(validator.isURL('https://mead.io'))

//==========================================================//

// const chalk = require('chalk')  //importing chalk->mpm library
//const getNotes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// const greenMsg = chalk.green("SUCCESS")
// console.log(greenMsg)
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// //console.log(chalk.blue.bgRed.bold('Hello world!'));
// const Redmsg = chalk.red("ERROR!!")
// console.log(Redmsg)
// //console.log(process.argv)
// console.log(process.argv[2])   // it will return 3rd element from array "argv"

// =====================================================================

// const command = process.argv[2]
// if(command === "add")
// {
//     console.log("Adding note!!")
// }
// else if(command === "remove")
// {
//     console.log("Removing note!!")
// }

// ============================================================================

const chalk = require('chalk');
// const greenMsg = chalk.green("SUCCESS")
// console.log(greenMsg)
const { command, argv } = require('yargs')
const yargs = require('yargs')
// const getNotes = require('./notes.js')
const notes = require('./notes.js')

//For customising yargs version number
yargs.version("1.1.0")   

//Create add command
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title:{
//             describe: "Note title",
//             demandOptions: true,
//             type: 'string'
//         },
//         body :{
//             describe: "Body of add command",
//             demandOptions: true,
//             type: 'string'
//         }
//     },
//     handler: function(){
//         //console.log("Adding a new note")
//         console.log("Title:" + argv.title)
//         console.log("Body:" + argv.body)
//     }
// })
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder :{
        title:{
            describe: "Note's title",
            demandOptions: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("Removing a new note")
        notes.removeNote(argv.title);
        
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        notes.listNotes();
    }
})
//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder:{
     title: {
        describe:"Note Title",
        demandOptions: true,
        type: 'string'
     }
    },
    handler: function(argv){
        console.log("Reading a note")
        notes.readNotes(argv.title);
    }
})
//console.log(process.argv)
console.log(yargs.argv)