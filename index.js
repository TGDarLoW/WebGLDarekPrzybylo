var express = require("express")
var app = express()
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
var path = require("path")
app.use(express.static('static'))
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})

