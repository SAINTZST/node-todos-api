// const MongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectID } = require("mongodb")

var uri = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(uri, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert to do', err)
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Saint',
    //     age: 24,
    //     location: 'Samutprakarn'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err)
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 2))

    // })

    client.close()
})