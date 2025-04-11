var express = require('express');

const ChatController = require("../controllers/api-v1/ChatController");

var router = express.Router()
// const validationSchema = require("./validationSchemas");
// const validatorMiddleware = require('../../middleware/validator');
// const middleware = require('../../middleware/Auth');


/**ChatController */
router.post('/chat', ChatController.PostChat);


module.exports = router