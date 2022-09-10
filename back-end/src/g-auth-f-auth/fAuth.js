const express=require('express');
const auth=new express.Router();

const user_data=require('../registration/authSchema');

auth.post('/f_auth/login',async(req,res)=>{
    const {name,email,f_token}=req.body;
    try{
    let token_check=await user_data.findOne({f_token})

    if(token_check){

      let user= await user_data.updateOne({f_token:token_check.f_token},{
        $set:{
            f_token:f_token
        }

      })
      res.status(200).send(user) 
    }else{

        let user=new user_data({
            name,email,f_token
           })
           let result=await user.save();
            if(result){
              res.status(200).send(result)
           }else{
              res.status(400).send();
           }

    }
      
    
   
    }catch(e){
      res.status(400).send("dsdj");
    }
    
})

auth.post('/f_auth/check_user',async(req,res)=>{
      const {name,email,f_token}=req.body;
      try{
         let token_check=await user_data.findOne({f_token});
       
         if(token_check.f_token===f_token){

            res.status(200).send(token_check.name)

         }else{
            res.status(400).send();
         }
      }catch(e){
        res.status(400).send();
      }
      
})


module.exports=auth;