import React from 'react'
import './Populardish.css';
import Burger from '../../assets/Burger.png';
import FrenchFries from '../../assets/FrenchFries.png';
import Noodles from '../../assets/Noodles.png';
import Sandwich from '../../assets/Sandwich.png';

const Populardish = () => {
  return (
    <>
      <div className="popular-dishes">
        <div className="bottom">
             <h2>Our Signature Dishes</h2>
        </div>

        <div className="dishes-container">
          <div className="dish-card">
            <img src={Burger} alt="dish" />
            <h3>BURGER</h3>
            <p>★★★★★</p>
          </div>

          <div className="dish-card">
            <img src={FrenchFries} alt="dish" />
            <h3>FRENCH FRIES</h3>
            <p>★★★★★</p>
          </div>

          <div className="dish-card">
            <img src={Noodles} alt="dish" />
            <h3>NOODLES</h3>
            <p>★★★★★</p>
          </div>

          <div className="dish-card">
            <img src={Sandwich} alt="dish" />
            <h3>SANDWICH</h3>
            <p>★★★★★</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Populardish
