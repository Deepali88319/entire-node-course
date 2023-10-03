const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const TaskRouter = require('./routers/task')
const UserRouter = require('./routers/user')
const app = express()
const port = process.env.PORT || 3000

/*
app.use((req,res,next)=>{
//   console.log(req.method, req.path)
//   next();
if(req.method === 'GET'){
    res.send("Get requests are disabled!");
}else{
   next();
}
});
*/

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. Check back soon.');
//     next();
// });

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }
})

app.post('/upload',upload.single('upload'),(req,res) =>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({ error: error.message })
})

app.use(express.json())
app.use(TaskRouter);
app.use(UserRouter)

/*
app.post('/users', async (req, res) => {
   
    // console.log(req.body)
    // res.send("Testing");
    const user = new User(req.body)

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send();
    }
})
*/

/*
app.post('/tasks',async (req,res)=>{
  const task = new Task(req.body);

//   task.save().then(()=>{
//     res.status(201).send(task);
//   }).catch((e)=>{
//     res.status(400).send(e);
//   })

try{
    await task.save();
    res.status(201).send(task);
}catch(e){
    res.status(400).send(e);
}

});

app.get('/tasks',async (req,res)=>{
// Task.find({}).then(
//     (tasks)=>{
//         res.send(tasks);
//     }
// ).catch((e)=>{res.status(500).send(e)});
try{
const tasks = await Task.find({});
res.send(tasks);
}catch(e){
    res.status(500).send(e)
}
});

app.get('/tasks/:id',async (req,res)=>{
//  Task.findById(req.params.id).then((task)=>{
//     if(!task){
//        return res.status(404).send();
//     }
//     res.send(task);
//  }).catch((e)=>{
//     res.status(500).send(e);
//  });
try{
    const task = await Task.findById(req.params.id);
    if(!task){
               return res.status(404).send();
            }
            res.send(task);

}catch(e){res.status(500).send(e);}
});

app.patch('/tasks/:id', async (req,res) =>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description','completed'];
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try{
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedTask) {
        return res.status(404).send()
    }

    res.send(updatedTask)
    }catch(e){
     res.status(400).send(e);
    }
});

app.delete('/tasks/:id', async (req,res)=>{
 
  try{
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if(!deletedTask){
      return res.status(404).send();
    }
    res.send(deletedTask);
  }catch(e){
    res.status(500).send(e);
  }

});
*/

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs')

/*
const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}
*/

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

const Task = require('./models/task')
const User = require('./models/user')

const main = async ()=>{
    // const task = await Task.findById('64f9ce2a18a26dd9f303e20d')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('64f9c4ec8219fca544ea68dc')
    // await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
