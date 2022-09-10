const mongoose=require('mongoose');
const user_registration=new mongoose.Schema({

    name:{
        type:String,

    },
    email:{
        type:String,
        

    },
    g_token:{
        type:String
    },
    f_token:{
        type:String
    }
    


})

const user_data=mongoose.model('authuserData',user_registration);

module.exports=user_data;
