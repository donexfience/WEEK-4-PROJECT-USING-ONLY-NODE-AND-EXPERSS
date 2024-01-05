var express = require('express');
const session = require('express-session');
var router = express.Router();
const message="WELCOME TO MY WEBSITE";


router.get('/', function(req, res, next) {
    let emails =req.session.user;
    console.log(emails)
    res.render('home',{emails,message}); 
});

module.exports = router;
