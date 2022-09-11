const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
require('dotenv').config();
const cors=require('cors')
app.use(cors())
const cookieParser=require('cookie-parser')
app.use(cookieParser());
app.use(express.json());
const imageUpload=require('express-fileupload');

app.use(imageUpload({
    useTempFiles:true
}))

require('./src/db/db')
const PORT=process.env.PORT||5000;

const {gst_router,gst_filling_router}=require('./src/router/gstRouter');
const user_registration=require('./src/router/userRegistration');
const g_auth=require('./src/g-auth-f-auth/gAuth')
const f_auth=require('./src/g-auth-f-auth/fAuth');


app.use('/gst',gst_router)
app.use('/gst_filling',gst_filling_router)
app.use('/registration',user_registration);
app.use('/registration',g_auth);
app.use('/registration',f_auth)



app.listen(PORT,()=>{
    console.log("running....")
})








