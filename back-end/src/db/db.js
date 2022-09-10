const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/pavan";
mongoose.connect(url,{
    
}).then((res)=>{
    console.log("successful")
}).catch((e)=>{
    console.log("un------------")
})


