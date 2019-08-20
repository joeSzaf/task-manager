// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// /Users/szaf/mongodb/bin/mongod --dbpath=/Users/szaf/mongodb-data

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to the database.')
  }

  const db = client.db(databaseName)

  // db.collection('users').deleteMany({
  //   age: 32
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    _id: new ObjectID("5d55a5aa9f1b564dae0ab6f5")
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})
