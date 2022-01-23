const express = require('express');
const bodyParser = require("./middlewares/bodyParser");
const monitor = require("./middlewares/morgan");
const route = require("./routes");
// const user = require("./routes/user");
const app = express();

app.use(monitor.morgan);
app.use(bodyParser.parse); // for parsing application/json

app.use("/",route);
// app.use("/user", user);

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
})