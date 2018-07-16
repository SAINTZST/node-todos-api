const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')


// Todo.remove({}).then((res) => {
//     console.log(res)
// })

// Todo.findByIdAndRemove('5b4cda9e49e48f0e3cd51760')
//     .then((todo) => {
//         console.log(todo)
//     })

Todo.findOneAndRemove({
    _id: '5b4cda9e49e48f0e3cd51760'
}).then((todo) => {
    
})