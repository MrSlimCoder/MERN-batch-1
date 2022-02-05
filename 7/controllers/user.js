const jwt = require("jsonwebtoken");

const User = require('../models/User');
exports.login = function (req, res) {
    User.findOne({ email: req.body.email, password: req.body.password }, function (err, user) {
        if (err) {
            res.status(500).json({
                success: false,
                message: "Error occured while fetching user"
            })
        }
        else if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        else {
            // const verify = jwt.verify(user.token);
            // if (!verify) {
            jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user
            }, 'secret', (err, token) => {
                if (err) { }
                else {
                    //User.findByIdAndUpdate(user._id, { token: token }, { new: true }, (err, user) => {});
                    return res.status(200).json({
                        success: true,
                        data: [{ user: user }, { token: `Bearer ${token}` }],
                        message: "User logged in successfully"
                    })
                }
            });
            // }
        }
    });
}

exports.signup = function (req, res) {
    const body = req.body;
    const user = new User(body);
    user.save();
    res.status(200).json({
        success: true,
        data: user,
        message: "User created successfully"
    })
}