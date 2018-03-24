module.exports = (application) => {
    application.post('/', (req, res) => {
        application.app.controllers.index.index(application, req, res)
    })
}