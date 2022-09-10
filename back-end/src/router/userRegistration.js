const express = require('express');
const router = express.Router();
const registration = express.Router();
const user_data = require('../registration/schema');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const verify=require('../access/userAccess')



router.post('/user/signup', async(req, res)=> {
    const { name, phone_no, email, password } = req.body;
   

    try {

        let email_check=await user_data.findOne({email});
        if(email_check){
      
            res.status(400).json({mess:"user already registed"})
        }else{

            
            let data=new user_data({
                name,phone_no,email,password
            })

            data.password=await bcrypt.hash(password,12);
            let result=await data.save();

            if(result) res.status(201).send(result.name)
            else res.status(400).send()
        }


    }catch(e){
        res.status(400).send(e)
    }
})




router.post('/user/signin',async(req, res)=> {
    const {email, password } = req.body;
    

    try {

        let email_check=await user_data.findOne({email});
        if(email_check){
            let result=await bcrypt.compare(password,email_check.password)
            if(result){
                
                let token_data=await jwt.sign({id:email_check._id},process.env.token);
                
               if(token_data){
                res.cookie("accessToken",token_data, {
                    expiresIn: '2h',
                    httpOnly: true
                });
               }
               
               
                res.status(200).send(email_check.name)
            }
            else res.status(400).send()
        }else{
            res.status(400).json({mess:"user not registed"})
           
        }


    }catch(e){
        res.status(400).send()
    }
})


router.get('/check_user',verify,async(req,res)=>{
    try{
        let data=await user_data.findOne({_id:req.dataFromMiddleware1})
        
        res.status(200).send(data.name)
    }catch(e){
        res.status(400).send(e);
    }
   

})

router.post('/logout',(req,res)=>{
   
    res.clearCookie('accessToken')
    res.status(200).send();
})








module.exports = router;