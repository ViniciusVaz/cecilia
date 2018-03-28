function ProductsDAO (connection) {
    this._connection = connection();
}

ProductsDAO.prototype.insertProduct = (product) => {
    this._connection.open( function(error, mongoClient) {
        mongoClient.collection("stock", function(error, collection) {
            collection.insert(product)
            mongoClient.close()
        })
    })
}

module.exports = () => {
    return ProductsDAO
}