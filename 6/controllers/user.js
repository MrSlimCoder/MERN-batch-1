// exports.create = function (req,res) {}
// exports.get = function (req,res) {}
// exports.delete = function (req,res) {}

const jwt = require("jsonwebtoken");

const User = require('../models/User');
exports.login = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
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
            jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user
            }, 'secret', (err, token) => {
                if (err) { }
                else {
                    return res.status(200).json({
                        success: true,
                        data: [{ user: user }, { token: token }],
                        message: "User logged in successfully"
                    })
                }
            });
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
// exports.logout = function (req,res) {}
// exports.update = function (req,res) {}
// exports.post = function (req,res) {}
// exports.privacy = function (req,res) {}