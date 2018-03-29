const dbConnection = require("../../config/dbConnection")
class HomeController {
    constructor (application, req, res) {
        this._app = application
        this._req = req
        this._res = res
    }

    insert() {
        const data = this._req.body
            , collection = dbConnection.get().collection('stock')
        
        collection.insert(data, (err, result) => {
            if( err ) {
                this._res.json(err)
            } else {
                this._res.json(result)
            }
        })
    }

    list() {
        let data = this._req.query
            , collection = dbConnection.get().collection('stock')

        if(data.name.length <= 0) {
            data = {}
        }

        collection.find(data).toArray((err, result) => {
            if( err ) {
                this._res.json(err)
            } else {
                this._res.json(result)
            }
        })
    }
}

module.exports = HomeController