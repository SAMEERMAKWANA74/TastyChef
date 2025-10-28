import React from 'react'
import './Menu.css';
import Header from '../Header/Header';
import Burger from '../../assets/Burger.png';
import burgur_star from '../../assets/burgur_star.png';


const Menu = () => {
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
                  <h1>BURGER</h1>
                  <p>Perfectly grilled and <br/>
                     Seerved fresh every time.</p>
                   <div className="reviews">
                       <h4>Reviews</h4>
                       <h3>+4.6</h3>
                       <img src={burgur_star} alt="dish" /> 
                   </div>    
                   
             <div className="btnpart">
             <button className='orderbtn'>Order</button> 
             </div>       
             </div>
            <div className="leftpart">
                 <img src={Burger} alt="dish" /> 
            </div>
    
    </div>
    </div>
    </>
  )
}

export default Menu
