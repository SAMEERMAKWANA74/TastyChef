import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';   // ✅ Import Link
import Header from '../Header/Header';
import Noodlesimg from '../../assets/Noodles.png';
import burgur_star from '../../assets/burgur_star.png';
import leftimage from '../../assets/leftimage.png';
import rightimage from '../../assets/rightimage.png';
import sliesimage from '../../assets/images_slides.png';
import rightsidemain from '../../assets/rightsidemain.png';
import leftsidemain from '../../assets/leftsidemain.png';


const Noodles= () => {
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
                  <h1>NOODLES</h1>
                  <p>Stir-fried with veggies and bold spices,<br />
                    our noodles deliver taste in every bite.</p>
                   <div className="reviews">
                       <h4>Reviews</h4>
                       <h3>+4.3</h3>
                       <img src={burgur_star} alt="dish" /> 
                       
                   </div>    
                   
             <div className="btnpart">
             <button className='orderbtn'>Order</button> 
             </div>       
             </div>
            <div className="leftpart">
                 <img src={Noodlesimg} alt="dish" />
                  <div className="smallslides">
                    <img className="leftimage" src={leftimage} alt="Previous" />
                    <img className="sliesimage" src={sliesimage} alt="dots" />
                    <img className="rightimage" src={rightimage} alt="Next" />
                 </div>
            </div>
        </div>
        <div className="bottomcomp">
          <li><Link to="/menu/sandwich">
                         <img className="leftsidemain" src={leftsidemain} alt="dots" />
          </Link></li>
          <li><Link to="/menu/frenchfries">
                         <img className="rightsidemain" src={rightsidemain} alt="dots" />
          </Link></li>
        </div>
    </div>
    </>
  )
}

export default Noodles