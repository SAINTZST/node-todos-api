require('./config/config')

const _ = require('lodash')
const express = require('express')
const bodyParse = require('body-parser')
const {
    ObjectID
} = require('mongodb')

const {
    mongoose
} = require('./db/mongoose')
const {
    Todo
} = require('./models/todo')
const {
    User
} = require('./models/user')

var app = express()
const port = process.env.PORT || 3000

// app.use(bodyParse.json())

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,token,authorization')

    res.setHeader('Access-Control-Allow-Credentials', 'true')

    // Pass to next layer of middleware
    next()
})

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
        res.send({
            todo
        })
    }).catch((e) => {
        res.status(400).send({
            message: e
        })
    })
})

app.put('/todos/:id', (req, res) => {
    var id = req.params.id
    var body = _.pick(req.body, ['text', 'completed'])

    if (!ObjectID.isValid(id)) {
        return res.status(404).send({
            message: 'Invalid ID'
        })
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime()
    } else {
        body.completed = false
        body.completedAt = null
    }

    Todo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send({
                message: 'Todo not found'
            })
        }
        res.send({
            todo
        })
    }).catch((err) => {
        res.status(400).send()
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

module.exports = {
    app
}