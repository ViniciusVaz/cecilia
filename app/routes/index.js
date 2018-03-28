//require controller let a

module.exports = (application) => {
    application.post('/', (req, res) => {
        new application.app.controllers.index.index(application, req, res)

        let b = new a(application, req, res) //armazenar let b

        b.insert
    })
}