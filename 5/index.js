const express = require('express');
const bodyParser = require("./middlewares/bodyParser");
const monitor = require("./middlewares/morgan");
require("./config/mongodb");
const todo = require("./routes/todo");
const app = express();

app.use(monitor.morgan);
app.use(bodyParser.parse); // for parsing application/json

app.use("/", todo);


app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
})
