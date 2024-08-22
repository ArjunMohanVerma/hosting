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

            <div className='p1'>
            
             <div className='logo'>
                 LOGO
             </div>

            <div className='data'>
            <p className='ob'>STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
            PHONE:9311220116, EMAIL:<Link to="support@vyleesalon.in" target='"_blank' className='lk'> &nbsp;support@vyleesalon.in</Link>
            </p>
            </div>
            
            {/* <div className='link' style={{display:"flex",width:"15%",gap:"0.2rem",padding:"1rem",marginRight:"1vw",mrginTop:"0.5vw"}}>
            
            <Link to="https://www.facebook.com/profile.php?id=61561414439963" target='"_blank'>
            <img src={facebook} style={images}/> 
            </Link>
            <Link to="https://www.youtube.com/@STKTBeautyandTechnology" target='"_blank'>
            <img src={youtube} style={images}/>
            </Link>
            <Link to="https://www.instagram.com/vylee.in/" target='"_blank'>
            
            <img src={instagram} style={images}/>
            </Link>
            </div> */}

            
            </div>
            
           
        </div>
        </>
    )

}

export default Footer;