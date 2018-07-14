const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

var id = '5b478b3794886d16f391bc3a'

// if (!ObjectID.isValid(id)) {
//     console.log('id is not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found')
//     }
//     console.log(todo)
// }).catch((err) => {
//     console.log(err.message)
// })

var userId = '5b3e60cc912686131d6705e8'
User.findById(userId).then((user) => {
    if (!user) {
        return console.log('user not found')
    }
    console.log(user)
}).catch((e) => {
    console.log(e.message)
})