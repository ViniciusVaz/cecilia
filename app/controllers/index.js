module.exports.index = (app, req, res) => {

    let data = req.body

    console.log(data)

    res.send("oi")
}