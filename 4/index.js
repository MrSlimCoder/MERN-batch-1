const express = require('express');
const bodyParser = require("./middlewares/bodyParser");
const monitor = require("./middlewares/morgan");
const route = require("./routes");
// const user = require("./routes/user");
require("./config/mongodb");
const Post = require("./models/Post");
const app = express();

app.use(monitor.morgan);
app.use(bodyParser.parse); // for parsing application/json

app.use("/", route);
// app.use("/user", user);

// Post.findOne();
// Post.updateMany();

/* Add Data to Database */
// const post = new Post({
//     title: "hello world",
//     description: "this is a test post"
// })
// post.save();

/* Get Single Data from Database */
/* SELECT * from Post where title="hello world" */
// Post.findOne({ title: "hello world" }).then(post => {
//     console.log(post);
// }).catch(err => console.log(err));

/* Get All Data from Database */
// Post.find({ title: "hello world" }).then(post => {
//     console.log(post);
// }).catch(err => console.log(err));

/* Update single Data from Database */
// Post.updateOne({ title: "hello world 1" },
//     { title: "hello world updated" }
// ).then(
//     post => { console.log(post) }
// );

/* Delete single data from Database */

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
})


// const myJson = {
//     "123": {
//        name: "vivek",
//        lastName: "anand"
//     },
//     "456": {
//         name: "usama",
//         lastName: "nayab"
//      }
// }

// console.log(myJson["456"]); // O(1)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } // O(n)

// for (let i = 1; i <= 10; i++) {
//     console.log("first",i)
//     for (let i = 1; i <= 10; i++) {
//         console.log("second",i);
//     }
// } // O(n^2)