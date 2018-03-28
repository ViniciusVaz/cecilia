// module.exports.index = (application, req, res) => {

    
//         , connection = application.config.dbConnection
//         , ProductsDAO = new application.app.models.ProductsDAO(connection)

//     ProductsDAO.insertProduct(data)

//     res.send("oi")
// }

// require dbConnection
class xablau {
    constructor (application, req, res) {
        console.log(req.body)
        const dbInit = new dbConnection()
        this.db = dbInit.init()
    }

    insert() {
        const data = req.body
    }
}

module.exports = xablau