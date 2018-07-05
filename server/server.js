var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TodoApp')

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

const User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minLength: 1
    }
})

var user = new User({
    email:'    napatchanan@neversitup.com'
})

user.save().then((doc) => {
    console.log(doc)
}, (err) => {
    console.log(err)
})

