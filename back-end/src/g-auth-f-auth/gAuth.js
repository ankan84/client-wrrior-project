const express = require('express');
const auth = new express.Router();
const jwt=require('jsonwebtoken');
const user_data = require('../registration/authSchema');

auth.post('/g_auth/login', async (req, res) => {
  
   const {name,email,g_token}=req.body; 
   try {
   
      res.cookie("accessToken", g_token, {
         expiresIn: '2h',
         httpOnly: true
     });
      let token_check = await user_data.findOne({g_token})
     
     
     
      if (token_check && g_token != "") {

         let user = await user_data.updateOne({ g_token: token_check.g_token }, {
            $set: {
               g_token: g_token
            }

         })
         res.status(200).send(user)
      } else {

         let user = new user_data({
            name, email, g_token
         })

         let result = await user.save();
         if (result) {
            
            res.status(200).send(result)
         } else {
            res.status(400).send();
         }

      }
      }catch(e){
        res.status(400).send("dsdj");
      }

   })

auth.post('/g_auth/check_user', async (req, res) => {
     
   try {
      
      let token = await user_data.findOne({g_token:req.cookies.accessToken});
     
   

      if (token.g_token === req.cookies.accessToken) {
         res.status(200).send(token.name)
      } else {
         res.status(400).send();
      }
   } catch (e) {
      res.status(400).send();
   }

})


module.exports = auth;