// module.exports.index = (application, req, res) => {

    
//         , connection = application.config.dbConnection
//         , ProductsDAO = new application.app.models.ProductsDAO(connection)

//     ProductsDAO.insertProduct(data)

//     res.send("oi")
// }

// require dbConnection

const dbConnection = require("../../config/dbConnection")
class HomeController {
    constructor (application, req, res) {
        const dbInit = new dbConnection()
        this._db = dbInit.init()
        this._req = req
        this._res = res
    }

    insert() {
        const data = this._req.body
        console.log(this._db)
        this._db.then( () => {
            console.log("wait")
            console.log(this._db)
            this._db = this._db.collection('stock')
            this._db.insert([{a:1, b:1}])
        })
    }
}

module.exports = HomeController