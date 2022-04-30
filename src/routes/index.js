var express = require('express');
const createController = require('../controllers/createController');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res)=>res.send('PRODE QATAR 2022'));
router.post('/new', createController.newSession)

module.exports = router;
