module.exports.index = (application, req, res) => {

    const data = req.body
        , connection = application.config.dbConnection
        , ProductsDAO = new application.app.models.ProductsDAO(connection)

    ProductsDAO.insertProduct(data)

    res.send("oi")
}