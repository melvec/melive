const express = require('express');
const router = express.Router();

//routes
router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'))
     res.render('index.html', { title: 'My first webpage'});
 });

 router.get('/contact',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'))
     res.render('contact.html', { title: 'Contact page'});
 });

 module.exports = router;