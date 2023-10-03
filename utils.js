

console.log('utils.js')

const name= "Deepali"


const add = function (a,b) {
    return a + b
}

module.exports = add // to export add function to another file
//module.exports = name  //by this other files can access its content

