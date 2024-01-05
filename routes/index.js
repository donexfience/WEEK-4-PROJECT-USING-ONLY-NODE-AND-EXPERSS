const logincheck=require('../usefullfunction/logincheck');

var express = require('express');
var router = express.Router();
const validEmail='donexbrocamp@gmail.com';
const validPassword='1234';
const message="WELCOME TO MY WEBSITE PLEASE LOGIN WITH CORRECT EMAIL AND PASSWORD";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  // this prevent backbutton issues
  if(req.session.loggedIn){
    res.redirect('/home');
  }
  else{
    res.render('index',{message});
  }
});
router.post('/submitlogin',function(req,res){
  logincheck.checklog(req.body).then((result)=>{
    if(result.status){
      req.session.loggedIn=true;
      req.session.user = result.email;
      console.log(req.session.loggedIn);
      
      res.redirect('/home');
    }
    else{
      res.redirect('/');
      req.session.loggedIn=false;
    }
  })
})
router.get('/index',(req,res)=>{
  req.session.destroy();
  res.redirect('/');
 
})

module.exports = router;
