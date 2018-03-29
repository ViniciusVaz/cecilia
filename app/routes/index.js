//require controller let a
const HomeController = require('../controllers/')

module.exports = (application) => {
    application.post('/a', (req, res) => {
        // new application.app.controllers.index.index(application, req, res)

        let home = new HomeController(application, req, res) //armazenar let b
        
        home.insert()
    })
}