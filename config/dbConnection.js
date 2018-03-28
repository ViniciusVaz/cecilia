const MongoClient = require('mongodb').MongoClient

class MongoConnection {
    init() {
        // Connection URL
        const url = 'mongodb://localhost:27017';

        // Database Name
        const dbName = '123';

        const XablauController = require('../app/controllers/')

        // Use connect method to connect to the Server
        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected correctly to server");

            const db = client.db(dbName);

            const a = new XablauController(db)

            return db
        })
    }

    close(){}//close connection
}