var express = require("express");
var app = express();
app.use(express.static(__dirname + "/RestfulTasksCRUD/dist/RestfulTasksCRUD"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(6789, function() {
    console.log("listening on port 6789");
});