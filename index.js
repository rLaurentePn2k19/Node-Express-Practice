const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
var mysql = require('mysql')

app.use(cors())
app.get('/', (req, res) => {
    res.json({
        title: 'Hellow Rangie',
        date: 'today'
    })
})

app.post('/user', (req, res) => {
    res.json({
        username: 'RangieGwapo123',
        email: 'rangie@gmail.com',
        password: null
    })
})

app.get('/db/create/:username/:email/:password', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
    })
    connection.connect()
    connection.query(`INSERT INTO accounts (username,email,password) VALUES ('${req.params.username}', '${req.params.email}', '${req.params.password}')`, function (err, rows, fields) {
        if (err) throw err

        res.json({  
            data: rows,
            params: req.params,
            username: req.params.username
        })
    })

    connection.end()
})

app.get('/db/retrieve/:username/:email/:password', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
    })
    connection.connect()
    connection.query(`INSERT INTO accounts (username,email,password) VALUES ('${req.params.username}', '${req.params.email}', '${req.params.password}')`, function (err, rows, fields) {
        if (err) throw err

        res.json({  
            data: rows,
            params: req.params,
            username: req.params.username
        })
    })

    connection.end()
})

app.get('/db/update/:id/:username', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
    })
    connection.connect()
    connection.query(`UPDATE accounts set username ='${req.params.username}' where id='${req.params.id}'`, function (err, rows, fields) {
        if (err) throw err

        res.json({  
            data: rows,
            params: req.params,
            username: req.params.username
        })
    })

    connection.end()
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))