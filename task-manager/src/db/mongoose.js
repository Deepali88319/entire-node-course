const mongoose = require('mongoose')
// const validator = require('validator')
// const { boolean } = require('yargs')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true
// })

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})

// //following will create d collection with name users
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         trim: true
//     },
//     email:{
//         type: String,
//         trim: true,
//         lowercase: true,
//         required: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is Invalid!')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if (value < 0){
//                 throw new Error('Age must be a positive number')
//             }
//         }

//     },
//     password:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,

//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new error('Password Invalid!')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   Hardik  ',
//     email: '  DEEPI@YOPMAIL.com',
//     age: 24,
//     password: "57292vdjn"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

//following will create d collection with name tasks
/*
const Task = mongoose.model('Task',{
    description:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const day1 = new Task({
    description: "Renovation",
    // completed: true
})

day1.save().then(() => {
    console.log(day1)
}).catch((error) => {
    console.log('Error!', error)
})
*/
