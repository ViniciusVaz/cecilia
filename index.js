const express    = require('express')
    , consign    = require('consign')
    , bodyParser = require('body-parser')
    , port       = process.env.PORT || 4004
    , app        = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)

app.listen(port, () => {
    console.log(`Server port: ${port}`)
})