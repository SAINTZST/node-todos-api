// const MongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectID } = require("mongodb")

var uri = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(uri, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b38f186b1a13c1ed75ffa8f')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    db.collection('Users').find({
        name: 'Saint'
    }).toArray().then((users) => {
        console.log(`Users count: ${users.length}`)
        console.log(JSON.stringify(users, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch users', err)
    })
    // client.close()
})