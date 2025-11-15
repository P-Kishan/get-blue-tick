let express = require('express');
let router = express.Router();
const { registerStudent } = require('../Controller/loginController');

router.post('/register', registerStudent);

module.exports = router;