const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_database",(err) => {
    if(err) {
        console.log("Error connecting to database");
    } else {
        console.log("Connected to database");
    }
}
)