import React from 'react'
import './registration.css'
import gst from './images/gst.jpg'
import apiData from './apidata/apidata';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
function Registration() {
    const style = {

    }
    return (
        <div className="registration-main">

            <div className="registration-heading">
                <h3>Registration</h3>

            </div>
            <div className="resgistation">

                <Item1 data={apiData[0]}></Item1>
                <Item1 data={apiData[1]} type="reverse"></Item1>
                <Item1 data={apiData[2]}></Item1>
                <Item1 data={apiData[3]} type="reverse"></Item1>
            </div>

            <div className="registration-lower">
                <Item2></Item2>
                <Item3></Item3>
                <Item4></Item4>
                

            </div>


        </div>


    )
}

function Item1(props) {

    return (<>

        <div className={`registration-item1 ${props.type === 'reverse' ? "items-reverse" : ""}`}>
            {
                props.data ? (<>
                    <div className="item1-img">
                        <img src={props.data.image_url} alt="" />

                    </div>
                    <div className="item1-text-information">
                        <div className="text">
                            <h4>{props.data.name}</h4>
                            <p>{props.data.content}</p>
                            <button>Learn More <ArrowRightAltIcon></ArrowRightAltIcon></button>
                        </div>

                    </div>
                </>) : (<></>)
            }

        </div>
    </>)
}

function Item2(){
    return(<>
         <div className="registration-lower-information">
           <div className="registration-lower-information-top">
             <span><ViewCompactIcon></ViewCompactIcon></span>
             <h4>Special financing</h4>
             
           </div>
           <h5>Apply for special financial support and earn exclusive rewards.</h5>
         </div>
    </>)
}

function Item3(){
    return(<>
         <div className="registration-lower-information">
           <div className="registration-lower-information-top">
             <span><ChatIcon></ChatIcon></span>
             <h4>Chat with team</h4>
             
           </div>
           <h5>Have a question? Chat online with an expert. Start chatting</h5>
         </div>
    </>)
}


function Item4(){
    return(<>
         <div className="registration-lower-information">
           <div className="registration-lower-information-top">
             <span><CallIcon></CallIcon></span>
             <h4>Call a Specialist</h4>
             
           </div>
           <h5>Our 24/7 support team is ready for you start conversion</h5>
         </div>
    </>)
}
export default Registration