const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CreatorsDB',{useNewUrlParser:true},(err)=>{
    if(!err){console.log('MangoDB connection Succeeded')}
    else
    {
        console.log('error in DB connection:'+ err);
    }
});

require('./meme.model');