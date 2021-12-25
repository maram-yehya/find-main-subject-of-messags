
const express = require('express');
var todoList = require('../controllers/controller');
const router = express.Router();
module.exports = router;


const UsersController  = require('../controllers/controller')
router.get('/users/mainSubject', UsersController.mainSubject)
router.get('/users/mainSubject2', UsersController.mainSubject2)
router.get('/users/mainSubject3', UsersController.mainSubject3)

