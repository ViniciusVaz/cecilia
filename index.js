const express    = require('express')
    , consign    = require('consign')
    , bodyParser = require('body-parser')
    , port       = process.env.PORT || 4004
    , app        = express()
    , db = require('./config/dbConnection')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

consign()
    .include('app/routes')
    .into(app)

db.connect('mongodb://localhost:27017/123', (err) => {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(port, () => {
            console.log(`Server port: ${port}`)
        })
    }
})