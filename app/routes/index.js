const HomeController = require('../controllers/')

module.exports = (application) => {
    application.post('/insert', (req, res) => {
        const home = new HomeController(application, req, res)
        home.insert()
    })

    application.get('/list', (req, res) => {
        const home = new HomeController(application, req, res)
        home.list()
    })
}