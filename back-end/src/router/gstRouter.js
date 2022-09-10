const express=require('express');
const gst_router=express.Router();
const registration_router=express.Router();
const {gst_data,registration_data} =require('../form/schema')
const cloud = require('cloudinary').v2


registration_router.post('/registration',async(req,res)=>{
    const {name,dob,email,number,fname,pan_no,pan_photo,bank_statement,lic_premium,medical_insurance,aadhar_no,aadhar_photo,loan_statement,donation,any_properties,curr_address,permanent_address,from16}=req.body;
   
    try{
      const gst_exist=await registration_data.findOne({email});
    if(gst_exist==null){
        let data=new  registration_data({
            name,dob,email,number,fname,pan_no,pan_photo,bank_statement,lic_premium,medical_insurance,aadhar_no,aadhar_photo,loan_statement,donation,any_properties,curr_address,permanent_address,from16
        })

        let result =await data.save();
        if(result){
            res.status(201).send(result)
      
        }
    }
    else{
        res.status(400).send({mess:"email used"}) ;
    }

    }catch(e){
        res.status(400).send({mess:e}) ;
    }
    

})


gst_router.post('/registration',async(req,res)=>{
    const{name_business,nature_business,phone_no,email,pan_card,aadher_card,proprietor_photo,rent_deed,current_bill,bank_passbook,aadhar_property,municipal_tax,hsn_code,office_address,residential_address}=req.body;
    

    try{
      const registration_exist=await gst_data.findOne({email});
    if(registration_exist==null){
        cloud.config({
            cloud_name: 'do69xdw9x',
            api_key: '158449624671379',
            api_secret: 'hqlgcrTjSIEVzoBh9XTMDicszWI',
            secure: true
        })

        let repan_card= await cloud.uploader.upload(req.files.pan_card.tempFilePath);
        let reaadher_card= await cloud.uploader.upload(req.files.aadher_card.tempFilePath) 
        let reproprietor_photo= await cloud.uploader.upload(req.files.proprietor_photo.tempFilePath) 
        let rerent_deed=await cloud.uploader.upload(req.files.rent_deed.tempFilePath) 
        let recurrent_bill=await cloud.uploader.upload(req.files.current_bill.tempFilePath)
        let rebank_passbook=await cloud.uploader.upload(req.files.bank_passbook.tempFilePath)
        let reaadhar_property=await cloud.uploader.upload(req.files.aadhar_property.tempFilePath)
        let remunicipal_tax=await cloud.uploader.upload(req.files.municipal_tax.tempFilePath)
       
        if(repan_card && reaadher_card && reproprietor_photo&& rerent_deed&& recurrent_bill &&rebank_passbook && reaadhar_property && remunicipal_tax){
            var data=new gst_data({
                name_business,nature_business,phone_no,email,pan_card:repan_card.url,aadher_card:reaadher_card.url,proprietor_photo:reproprietor_photo.url,rent_deed:rerent_deed.url,current_bill:recurrent_bill.url,bank_passbook:rebank_passbook.url,aadhar_property:reaadhar_property.url,municipal_tax:remunicipal_tax.url,hsn_code,office_address,residential_address
            })
        }
       

        let result =await data.save();
        if(result){
            
            res.status(201).send(result)
        }
    }
    else{
        res.status(400).send({mess:"email used"});
    }

    }catch(e){
        res.status(400).send({mess:e});
    }
    

})






module.exports={gst_router,registration_router};