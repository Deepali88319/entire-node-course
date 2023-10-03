// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const { MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId();
console.log(id.id.length);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(
    //  console.log("Connected Correctly!!!!")
     (client) => {
        const db = client.db(databaseName)
        //  db.collection('users').findOne({name: 'Vikram'}, (error,user)=>{
         db.collection('users').findOne({_id: new ObjectId("64edd6b5ecff56cf59461e49")}, (error,user)=>{    
        if(error){
                console.log("Unable to fetch...");
            }
            console.log(user);  //not working
         });

         db.collection('tasks').findOne({_id: new ObjectId("64edd8ec728472ebd36ec704")}, (error,user)=>{
            if(error){
                console.log("Unable to fetch...");
            }
            console.log(user);
         });

         db.collection('tasks').find({ completed: false}).toArray((error,user)=>{
            console.log(user);
         });

         db.collection('users').updateOne({
            _id: new ObjectId("64edd8eb728472ebd36ec701")
         },{
            // $set: {
            //    name: "Shreya"
            // }
            $inc: {
               age: 1
            }

         }).then((result)=>{
            console.log(result)
          }).catch((error)=>{
            console.log(error)
          })

          db.collection('tasks').updateMany({completed: false},{
            $set:{completed:true}
          }).then((result)=>{console.log(result)}).catch((error)=>{ console.log(error)})

            // db.collection('users').deleteMany({
            //     age: 27
            // }).then((result) => {
            //     console.log(result)
            // }).catch((error) => {
            //     console.log(error)
            // })

        db.collection('tasks').deleteOne({
               _id: new ObjectId("64edd8ec728472ebd36ec704")
         }).then((result) => {
               console.log(result)
         }).catch((error) => {
               console.log(error)
         })
        // db.collection('users').insertOne({
        //     _id: id,
        //     name: 'Vikram',
        //     age: 24
        // },(error,result)=>{
        //    if(error){
        //     console.error(error);
        //     return console.log("Unable to insert user...");
        // }
        // console.log(result.ops);  //Not working
        // })

        // db.collection('tasks').insertMany([
        //     {
        //         description: "Maths",
        //         completed: false
        //     },{
        //         description: "Science",
        //         completed: false
        //     },{
        //         description: "English",
        //         completed: true
        //     }
        // ],(error,result)=>{
        //     if(error){
        //         console.error(error,"Unable to insert user....");
        //         return console.log("Unable to insert user...");
        //     }
        //     console.log(result.ops);  //Not working
        // })
     }
     )
.catch(err =>
 console.log("mongodb connection error ", err)
)

// ################################################################################
//mongoose- to establish a connection between nodejs application and mongodb server

// const mongoose = require("mongoose");
// const connectionURL = 'mongodb://127.0.0.1:27017'
//  mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })

//         .then(

//             (data) => {

//                 console.log(`mongodb connected with server :: ${data.connection.host}`)

//             }

//         )

//         .catch(err =>

//             console.log("mongodb connection error ", err)

//         )

        


 