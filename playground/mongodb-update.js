// const MongoClient = require("mongodb").MongoClient
const { MongoClient, ObjectID } = require("mongodb")

var uri = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(uri, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server ')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b3a613df3bcfe40b96867dc')
    // }, {
    //         $set: {
    //             completed: true
    //         }

    //     }, {
    //         returnOriginal: false
    //     }).then((res) => {
    //         console.log(res)
    //     })

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5b390613b84bb01f3264b547')
    // }, {
    //         $set: {
    //             name: 'Saint'
    //         },
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //     })
    // client.close()
})