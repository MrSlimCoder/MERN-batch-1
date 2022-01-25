const express = require('express');
const controllers = require("../controllers/user");
const router = express.Router();

router.get('/create',controllers.login);
router.get('/update',controllers.update);

module.exports = router;