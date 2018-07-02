// const MongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectID } = require("mongodb")

var uri = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(uri, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    //delete many
    // db.collection('Todos').deleteMany({
    //     text: 'Something to do'
    // }).then((res) => {
    //     console.log(res)
    // }, (err) => {
    //     console.log(err)
    // })

    // delete one
    // db.collection('Todos').deleteOne({
    //     text: 'Walk a dog'
    // }).then((res) => {
    //     console.log(res)
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((res) => {
    //     console.log(res)
    // })

    // db.collection('Users').deleteMany({
    //     name: 'Saint'
    // }).then((res) => {
    //     console.log(res)
    // })

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5b390761bdbb5f1f3e52a495')
    // }).then((res) => {
    //     console.log(res)
    // })

    // client.close()
})