const mongoose=require('mongoose');
const validator=require('validator')
const user_registration=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    
    },
    phone_no:{
        type:Number,
        required:true,

    },
    email:{

        type:String,
        validate:function(value){
            if(!validator.isEmail(value)){
                throw new Error();
            }
            
        },
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
   
    


})

const user_data=mongoose.model('userData',user_registration);

module.exports=user_data;
