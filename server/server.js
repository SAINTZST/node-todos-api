var express = require('express')
var bodyParse = require('body-parser')
const { ObjectID } = require('mongodb')

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/user')

var app = express()
const port = process.env.PORT || 3000

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

app.get('/todos', (req, res) => {
    Todo.find({}).then((todos) => {
        res.send({
            status_code: 200,
            message: 'OK',
            todos
        })
    }, (err) => {
        res.status(400).send(err)
    })
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send({
            message: 'Invalid ID'
        })
    }
    Todo.findById({
        _id: id
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send({
                message: 'Todo not found'
            })
        }
        res.send({
            todo
        })
    }).catch(((err) => {
        res.status(400).send({
            message: err
        })
    }))
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send({
            message: 'Invalid ID'
        })
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send({
                message: 'Todo not found'
            })
        }
        res.send({todo})
    }).catch((e) => {
        res.status(400).send({
            message: e
        })
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

module.exports = {
    app
}