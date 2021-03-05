require('./models/db');

const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const bodyparser=require('body-parser');
const creatorController=require('./controllers/creatorController');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
let app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts/',handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine','hbs');
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Express server started at port: 3000');
});

app.use('/meme',creatorController);