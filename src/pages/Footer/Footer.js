import React from 'react';
import './Footer.css';
import facebook from"./facebook.png";
import instagram from"./instagram.png";
import youtube from"./youtube.png";
import {Link} from 'react-router-dom';



function Footer(){
    const images={
        height:"2rem",
        width:"2.5rem",
        paddingLeft:"1vw",
    }
    return(
        <>
        <div className='footer'>

            <div style={{display:"flex",paddingTop:"0.5rem"}}>
            
            <div className='logo' style={{width:"15%",padding:"1rem",fontSize:"1rem",marginTop:"0.1vw",display:"inline-block",textShadow:"2px 2px purple"}}>
                STKT<br/>
            <span style={{fontSize:"0.5rem",textShadow:"3px 3px purple"}}>Beauty and <br/>Technology</span>
            </div>


            <div className='data' style={{width:"50%",padding:"1rem"}}>
            <p style={{fontSize:"0.8rem",marginTop:"0px"}}>STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
            PHONE:9311220116, EMAIL:<Link to="support@vyleesalon.in" target='"_blank' style={{color:"white",fontSize:"0.8rem",textDecoration:"none"}}> &nbsp;support@vyleesalon.in</Link>
            </p>
            </div>
            
            <div className='link' style={{display:"flex",width:"15%",gap:"0.2rem",padding:"1rem",marginRight:"1vw",mrginTop:"0.5vw"}}>
            
            <Link to="https://www.facebook.com/profile.php?id=61561414439963" target='"_blank'>
            <img src={facebook} style={images}/> 
            </Link>
            <Link to="https://www.youtube.com/@STKTBeautyandTechnology" target='"_blank'>
            <img src={youtube} style={images}/>
            </Link>
            <Link to="https://www.instagram.com/vylee.in/" target='"_blank'>
            <img src={instagram} style={images}/>
            </Link>
            </div>

            
            </div>
            
           
        </div>
        </>
    )

}

export default Footer;