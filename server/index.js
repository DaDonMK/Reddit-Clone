require('dotenv').config()

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

const massive = require('massive')
const express = require('express')
const app = express()

const redditCtrl = require('./controllers/redditCtrl')

const session = require('express-session')

app.use(express.json())

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
  }))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Server is bumping on ${SERVER_PORT}`))
})
.catch(err => console.log(err))

app.get('/api/getAllSubs', redditCtrl.getAll)
app.get('/api/getOne/:id', redditCtrl.getOne)



