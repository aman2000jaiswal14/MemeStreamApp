const mongoose=require('mongoose');

let creatorSchema=new mongoose.Schema({
    name:{
        type:String
    },
    caption:{
        type:String
    },
    image:{
        type:String
    }
});
mongoose.model('Creator',creatorSchema);