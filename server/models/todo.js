const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})

module.exports = {
    Todo
}
// var myTodo = new Todo({
//     text: 'Eat lunch',
//     completed: false,
//     completedAt: + new Date()
// })

// myTodo.save().then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })