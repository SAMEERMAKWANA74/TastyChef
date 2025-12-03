import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';   // ✅ Import Link
import Header from '../Header/Header';
import Frenchfriesimg from '../../assets/FrenchFries.png';
import burgur_star from '../../assets/burgur_star.png';
import leftimage from '../../assets/leftimage.png';
import rightimage from '../../assets/rightimage.png';
import sliesimage from '../../assets/images_slides.png';
import leftsidemain from '../../assets/leftsidemain.png';
import rightsidemain from '../../assets/rightsidemain.png';

const Frenchfries= () => {
  return (
    <>
    <div className="menu-container">
        <Header />
        <div className='menu-title'>
               <h2>Fast Food</h2>
        </div>

        <div className='maincompo'>
            <div className="rightpart">
                  <h2>Our Signature</h2>
                  <h1>French Fries</h1>
                  <p>Perfectly golden and crispy fries,<br/>
                  served hot with flavorful dips</p>
                   <div className="reviews">
                       <h4>Reviews</h4>
                       <h3>+4.0</h3>
                       <img src={burgur_star} alt="dish" /> 
                   </div>    
                   
             <div className="btnpart">
             <button className='orderbtn'>Order</button> 
             </div>       
             </div>
            <div className="leftpart">
                 <img src={Frenchfriesimg} alt="dish" />  
                 <div className="smallslides">
                   <img className="arrow leftimage" src={leftimage} alt="Previous" />
                   <img className="sliesimage" src={sliesimage} alt="dots" />
                   <img className="arrow rightimage" src={rightimage} alt="Next" />
                 </div>               
            </div> 
        </div>
         <div className="bottomcomp">
                  <li><Link to="/menu/noodles">
                                 <img className="leftsidemain" src={leftsidemain} alt="dots" />
                  </Link></li>
                  <li><Link to="/menu/burger">
                                 <img className="rightsidemain" src={rightsidemain} alt="dots" />
                  </Link></li>
           </div>
    </div>
    </>
  )
}

export default Frenchfries
