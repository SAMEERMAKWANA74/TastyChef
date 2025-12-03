import React from 'react'
import './Populardish.css';
import Burger from '../../assets/Burger.png';
import FrenchFries from '../../assets/FrenchFries.png';
import Noodles from '../../assets/Noodles.png';
import Sandwich from '../../assets/Sandwich.png';
import { Link } from 'react-router-dom';   // ✅ Import Link


const Populardish = () => {
  return (
    <>
      <div className="popular-dishes">
        <div className="bottom">
             <h2>Our Signature Dishes</h2>
        </div>

        <div className="dishes-container">
           <li><Link to="/menu/burger">
          <div className="dish-card">
            <img src={Burger} alt="dish" />
            <h3>BURGER</h3>
            <p>★★★★★</p>
          </div></Link></li>
           
          <li><Link to="/menu/frenchfries">
          <div className="dish-card">
            <img src={FrenchFries} alt="dish" />
            <h3>FRENCH FRIES</h3>
            <p>★★★★★</p>
          </div></Link></li>

          <li><Link to="/menu/noodles">
          <div className="dish-card">
            <img src={Noodles} alt="dish" />
            <h3>NOODLES</h3>
            <p>★★★★★</p>
          </div></Link></li>
         
          <li><Link to="/menu/sandwich">
          <div className="dish-card">
            <img src={Sandwich} alt="dish" />
            <h3>SANDWICH</h3>
            <p>★★★★★</p>
          </div></Link></li>
        </div>
      </div>
    </>
  )
}

export default Populardish
