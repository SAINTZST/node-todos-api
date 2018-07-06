var express = require('express')
var bodyParse = require('body-parser')

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/user')

var app = express()

app.use(bodyParse.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        console.log(doc)
        res.send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})