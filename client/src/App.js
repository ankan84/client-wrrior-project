import React from 'react'
import './App.css'
import { HomeSlider } from './components/slider/HomeSlider'
import Gst from './components/gst/Gst'
import Registration from './components/registration/Registration'
import Aos from 'aos'
import 'aos/dist/aos.css'
import GLogin from './components/GLogin'
function App() {
  Aos.init({duration:"1000"})
  return (
    <>
       {/* <Gst></Gst> */}
         
        {/* <HomeSlider></HomeSlider>   */}

        {/* <Registration></Registration> */}

        <GLogin ></GLogin>




    </>
  )
}

export default App