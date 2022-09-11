const express=require('express');
const gst_router=express.Router();
const gst_filling_router=express.Router();
const {gst_data,gst_filling_data} =require('../form/schema')
const cloud = require('cloudinary').v2


gst_filling_router.post('/registration',async(req,res)=>{
    const{ your_name,dob,mob_number,email,father_name,pan_number,aadhar_no,property,curr_address,permanent_address,form_16}=req.body;

   try{

    const gst_exist=await gst_filling_data.findOne({email});
    if(gst_exist==null){

        cloud.config({
            cloud_name: 'do69xdw9x',
            api_key: '158449624671379',
            api_secret: 'hqlgcrTjSIEVzoBh9XTMDicszWI',
            secure: true
        })


        let pan_photo= await cloud.uploader.upload(req.files.pan_photo.tempFilePath);
        let bank_statement= await cloud.uploader.upload(req.files.bank_statement.tempFilePath)
        let aadhar_photo=await cloud.uploader.upload(req.files.aadhar_photo.tempFilePath)
        let loan_statement=await cloud.uploader.upload(req.files.loan_statement.tempFilePath)
        let donation_receipt=await cloud.uploader.upload(req.files.donation_receipt.tempFilePath)
        let form_16=await cloud.uploader.upload(req.files.form_16.tempFilePath)
       
        if(req.files.lic_premium){
            var lic_premium= await cloud.uploader.upload(req.files.lic_premium.tempFilePath) 
        }
        
        
        if(req.files.medical_insurance){
            var medical_insurance=await cloud.uploader.upload(req.files.medical_insurance.tempFilePath) 
       
        }
       

        if(pan_photo && bank_statement &&loan_statement&& aadhar_photo  && form_16 && lic_premium && medical_insurance ){
       
            var data=new  gst_filling_data({
                your_name,dob,mob_number,email,father_name,pan_number,pan_photo:pan_photo.url,bank_statement:bank_statement.url,lic_premium:lic_premium.url,medical_insurance:medical_insurance.url,aadhar_no,aadhar_photo:aadhar_photo.url,loan_statement:loan_statement.url,donation_receipt:donation_receipt.url,property,curr_address,permanent_address,form_16:form_16.url
            })

        }else{
            if(lic_premium){
                var data=new  gst_filling_data({
                    your_name,dob,mob_number,email,father_name,pan_number,pan_photo:pan_photo.url,bank_statement:bank_statement.url,lic_premium:lic_premium.url,aadhar_no,aadhar_photo:aadhar_photo.url,loan_statement:loan_statement.url,donation_receipt:donation_receipt.url,property,curr_address,permanent_address,form_16:form_16.url
                })
            }
            else if(medical_insurance){
                
            var data=new  gst_filling_data({
                your_name,dob,mob_number,email,father_name,pan_number,pan_photo:pan_photo.url,bank_statement:bank_statement.url,medical_insurance:medical_insurance.url,aadhar_no,aadhar_photo:aadhar_photo.url,loan_statement:loan_statement.url,donation_receipt:donation_receipt.url,property,curr_address,permanent_address,form_16:form_16.url
            })
            }
            else{
                var data=new  gst_filling_data({
                    your_name,dob,mob_number,email,father_name,pan_number,pan_photo:pan_photo.url,bank_statement:bank_statement.url,aadhar_no,aadhar_photo:aadhar_photo.url,loan_statement:loan_statement.url,donation_receipt:donation_receipt.url,property,curr_address,permanent_address,form_16:form_16.url
                })
            }
        }


        let result =await data.save();
        if(result){
            res.status(201).send(result)
      
        }
    }
    else{
        res.status(400).send({mess:"email used"}) ;
    }

    }catch(e){
        res.status(400).send(e) ;
    }
    

})






gst_router.post('/registration',async(req,res)=>{
    const{name_business,nature_business,phone_no,email,hsn_code,office_address,residential_address}=req.body;
   
    try{
     
    const registration_exist=await gst_data.findOne({email});

    if(registration_exist==null){
        cloud.config({
            cloud_name: 'do69xdw9x',
            api_key: '158449624671379',
            api_secret: 'hqlgcrTjSIEVzoBh9XTMDicszWI',
            secure: true
        })


        let pan_card= await cloud.uploader.upload(req.files.pan_card.tempFilePath);
        let aadher_card= await cloud.uploader.upload(req.files.aadher_card.tempFilePath) 
        
        let proprietor_photo= await cloud.uploader.upload(req.files.proprietor_photo.tempFilePath) 
        let rent_deed=await cloud.uploader.upload(req.files.rent_deed.tempFilePath) 
        let current_bill=await cloud.uploader.upload(req.files.current_bill.tempFilePath)
        let bank_passbook=await cloud.uploader.upload(req.files.bank_passbook.tempFilePath)
        let aadhar_property=await cloud.uploader.upload(req.files.aadhar_property.tempFilePath)
        let municipal_tax=await cloud.uploader.upload(req.files.municipal_tax.tempFilePath)
       
        if(pan_card && aadher_card && proprietor_photo&& rent_deed&& current_bill &&bank_passbook && aadhar_property && municipal_tax){
         
            var data=new gst_data({
                name_business,nature_business,phone_no,email,pan_card:pan_card.url,aadher_card:aadher_card.url,proprietor_photo:proprietor_photo.url,rent_deed:rent_deed.url,current_bill:current_bill.url,bank_passbook:bank_passbook.url,aadhar_property:aadhar_property.url,municipal_tax:municipal_tax.url,hsn_code,office_address,residential_address
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






module.exports={gst_router,gst_filling_router};