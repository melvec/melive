const express = require('express');
const app = express();
express.Router();

const path = require('path');
//settings
app.set('port', process.env.PORT || 3000);
//app.set('port',  3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);

app.set('vew engine','ejs');



//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listening the server
app.listen(app.get('port'), ()=>{
console.log('server on port ',app.get('port'));

})