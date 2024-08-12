import React, { useState } from "react";
import { useRef } from "react";
import contact1 from "./contact1.jpg";
import vyleeqr from"./vyleeqr.png";
import emailjs from '@emailjs/browser';
import "./Contact.css";



export default function Contact(){
  const [details, setDetails] = useState({
    user_name:"",
    user_mobile:"",
    user_email:"",
    message:"",

  })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setDetails((prev)=>{
      return{...prev, [name]: value};
    });

    
   
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_476web2', 'template_eraysr9', form.current, {
        publicKey: 'CxAgOyvdjPRMfCtC8',
      })
      .then(
        () => {
          alert('Message Sent!');
          setDetails({user_email:"",user_name:"",user_mobile:"",message:""})
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const cont1={
   

  }
  // const lbl={
  //   fontSize:'25px',
  //   color:'black',
  //   padding:'2vw',
  //   width:"3vw"
  // }
  // const btn={
  //   width:"120px",
  //   height:"50px",
  //   borderRadius:"5px",
  //   fontSize:"25px",
  //   backgroundColor:"blue",
  //   color:"white",
  //   boxShadow: '2px 2px 2px 2px black',
  //   marginRight:"30px"

  // }
  return(
    <>
    <div className="centainer">
      <h2 style={{fontSize:'2.5rem'}}><u>Contact Us</u></h2>
      <div className="outer">
        <div className="div1">
        <p className="text1"> 
        We are dedicated to transforming the salon industry by seamlessly connecting salon owners with customers through innovative and convenient solutions.
        Our platform acts as a bridge, offering exceptional salon services to discerning customers who seek high-quality experiences.
        </p>
        <div>
          <p style={{fontSize:"1.6rem"}}>Connect with us on Instagram</p><br/>
          <img src={vyleeqr} style={{height:"12rem", width:"12rem",boxShadow: '5px 5px 5px 5px black',borderRadius:"1rem"}}/>
    
        <h2 style={{fontSize:"1.5rem"}}><u>Address:</u></h2>
        <p style={{fontSize:"1rem"}}>
        STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
        FF-229, FIRST FLOOR, TOWER A ANSAL API, PALAM<br/>
        CORPORATEPLAZA, GURUGRAM, HARYANA 122017<br/>
        PHONE:9311220116, EMAIL: SUPPORT@VYLEESALON.IN<br/>
        CIN No.:U96905HR2024PTC119569
        </p>
        </div>
        </div>
        
        <div className="div2" style={cont1}><br/>
         <p style={{ fontSize:"3vw",color:"black",width:"16vw",margin: "0 auto",marginTop:"20px",}}><u>Contact Us</u></p>
          <br/><br/>
          <div style={{overflow: "hidden"}}>
   

            <form ref={form} onSubmit={sendEmail}>
              <table style={{marginLeft:"5vw"}}>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Name : <br/></label></td>
              <td><input style={{boxShadow:"1px 1px 1px black"}} required type="text" onChange={handleChange} placeholder="Enter Name" value={details.user_name} id="name" name="user_name"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Mobile : <br/></label></td>
              <td><input style={{boxShadow:"1px 1px 1px black"}} required type="number" onChange={handleChange} placeholder="Enter Mobile" value={details.user_mobile} id="mob" name="user_mobile"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Email : </label></td>
              <td><input style={{boxShadow:"1px 1px 1px black"}} required type="email" onChange={handleChange} placeholder="Enter Mail" value={details.user_email} id="mail" name="user_email"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Message : <br/></label></td>
              <td><textarea style={{boxShadow:"1px 1px 1px black", resize:"none"}} required onChange={handleChange} name="message" rows="5" cols="30" value={details.message} id="msg" placeholder="Enter Your Message Here" ></textarea></td>
              </tr><br/>
              </table>
              <input type="submit" value="Send" style={{boxShadow:"1px 1px 1px black",marginLeft:"3vw",width:"8vw", height:"4vw",color:"white", backgroundColor:"blueviolet",fontSize:"1.5vw",marginTop:"3vw",borderRadius:"1.5vw"}}/>
            </form>
       
            
            </div>
            </div>


        </div>
        </div>
</>
)};


