const mongoose=require('mongoose');

const gst=new mongoose.Schema({
    name_business:{
        type:String,
        required:true
    },
    nature_business:{
        type:String,
        required:true
    },
    phone_no:{
        type:String,
    
        required:true   
    },
    email:{
        type:String,
        required:true
    },
    pan_card:{
        type:String,
        required:true
    },
    aadher_card:{
        type:String,
        required:true
    },
    proprietor_photo:{
        type:String,
      
    },
    rent_deed:{
        type:String,
        required:true
    
    },
    current_bill:{
        type:String,
        required:true

       
    },
    bank_passbook:{
        type:String,
        required:true
    },
    aadhar_property:{
        type:String,
        required:true
    },
    municipal_tax:{
        type:String,
        required:true
        
    },
    hsn_code:{
        type:String,
        required:true
    },
    office_address:{
        type:String,
        required:true
       
    },
    residential_address:{
        type:String,
        required:true
    }
    
    

})


const gst_filling=new mongoose.Schema({
    your_name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    mob_number:{
        type:Number,
        required:true   
    },
    email:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true
    },
    pan_number:{
        type:String,
        required:true
    },
    pan_photo:{
        type:String,
        required:true
    },
    bank_statement:{
        type:String,
        required:true
    },
    lic_premium:{
        type:String,
    
    },
    medical_insurance:{
        type:String,
       
    },
    aadhar_no:{
        type:String,
        required:true
    },
    aadhar_photo:{
        type:String,
        required:true
    },
    loan_statement:{
        type:String,
    
    },
    donation_receipt:{
        type:String,
        
    },
    property:{
        type:String,
        required:true
    },
    curr_address:{
        type:String,
       
    },
    permanent_address:{
        type:String,
        required:true
    },
   
    form_16:{
        type:String,
        required:true
    }
    
})

const gst_data=mongoose.model('gstData',gst);
const gst_filling_data=mongoose.model('gst_filling',gst_filling)

module.exports={gst_data,gst_filling_data};

