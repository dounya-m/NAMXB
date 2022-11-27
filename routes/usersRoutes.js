const express = require('express');
const user = require('../controllers/userController');
const router = express.Router();

router.get('/', user.getUsers)
router.post('/', user.addUser)
router.post('/login', user.login)

module.exports = router