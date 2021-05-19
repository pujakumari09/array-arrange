const express = require('express')
const router = express.Router()
const controller = require('../controller/data');

router.get('/getpost', controller.getPostsComments);

module.exports = router;