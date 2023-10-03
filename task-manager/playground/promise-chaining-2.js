require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('64f19699974ed0aac6feb66e').then((task)=>{
//       console.log(task); 
//       return Task.countDocuments({completed: false})
//     }).then((result)=>{
//     console.log(result);
//     }).catch((e)=>{
//      console.log(e);
//     }
//     );

const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id);
    const countIncompleteTasks = await Task.countDocuments({completed: false})
    return countIncompleteTasks;
}

deleteTaskAndCount('64f199e10ad9f2e32b9a5773').then((count)=>{console.log(count)}).catch((e)=>{console.log(e)})