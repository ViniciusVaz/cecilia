const MongoClient = require('mongodb').MongoClient

class MongoConnection {

    async init() {
        const url = 'mongodb://localhost:27017'
            , dbName = '123'

        let db = await MongoClient.connect(url, function(err, client) {
            const db = client.db(dbName)
            console.log("Connected correctly to server");

            return db
        })
        
        return db
    }

    close(){}//close connection
}

module.exports = MongoConnection