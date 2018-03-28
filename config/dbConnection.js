const mongo = require('mongodb')

let connMongoDB = () => {

    let db = new mongo.Db(
        '123',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    )

    return db
}

module.exports = () => {
    return connMongoDB
}