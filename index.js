const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

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
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))