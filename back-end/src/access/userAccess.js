const express=require('express');
const jwt=require('jsonwebtoken');
const verify= async function(req,res,next){

    try{
       let token=req.cookies.accessToken;
    
       
       
       let result= await jwt.verify(token,process.env.token);
    
       if(result){
        req.dataFromMiddleware1=result.id;
        next();
        }

    }catch(e){
        res.status(400).send(e)
    }
  
   
   

}


module.exports=verify;
