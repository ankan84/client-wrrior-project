import React,{useEffect,useState} from 'react'
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from 'firebase/auth'
function GLogin() {
  
  const [data,setData]=useState(0);

const firebaseConfig = {
  apiKey: "AIzaSyDcKKSafr7Av-3DhIxK1Nsad-2znoclL5E",
  authDomain: "auth-login-402b6.firebaseapp.com",
  projectId: "auth-login-402b6",
  storageBucket: "auth-login-402b6.appspot.com",
  messagingSenderId: "725818933277",
  appId: "1:725818933277:web:96104ff7f683064cfc46f4",
  measurementId: "G-SDR1K2FZ01"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth =getAuth(firebaseApp)



const provider=new GoogleAuthProvider();
const fbprovider=new FacebookAuthProvider();

const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e)
    })
}


const signInWithFacebook=()=>{
  signInWithPopup(auth,fbprovider).then((res)=>{
      console.log(res)
  }).catch((e)=>{
      console.log(e)
  })
}
 
  useEffect(()=>{
      
      console.log("use Effect called")

      // return ()=>{
        
      //    console.log("unmount")
      // }
  })

  return (
    // <div>
    //     <button onClick={signInWithGoogle}> hallo google</button>
    //      <button onClick={signInWithFacebook}> hallo facebook</button>
    // </div>
    <>
        <h1>hi ankan {data} </h1>
        <button onClick={()=>{
           setData(data+1);
        }}> click me</button>

    </>


  )
}

export default GLogin