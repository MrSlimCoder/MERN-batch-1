const express = require('express');
const bodyParser = require("./middlewares/bodyParser");
const monitor = require("./middlewares/morgan");
require("./config/mongodb");
const passport = require("passport");
require("./config/passport")(passport);
const todo = require("./routes/todo");
const user = require("./routes/user");
const app = express();

app.use(monitor.morgan);
app.use(bodyParser.parse); // for parsing application/json

app.use("/user", user);
app.use("/todo",passport.authenticate('jwt', { session: false }),todo);


app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
})
