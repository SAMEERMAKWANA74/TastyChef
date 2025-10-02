import React from 'react'
import Header from '../Header/Header';
import './Home.css';
import homedish from '../../assets/homedish.png';
import Populardish from '../PopularDish/Populardish';

const Home = () => {
  return (
    <div className="home-container"> 
      <Header />

      {/* Hero Section */}
      <div className='maincompo'>
        <div className="rightpart">
          <img src={homedish} alt="dish" /> 
        </div>

        <div className="leftpart">
          <h1>Welcome To</h1>
          <h2>Tasty-Chef</h2>
          <p>
            Dive into fresh, flavorful dishes crafted with passion and delivered fast—
            whether you’re ordering in or booking a table. Every bite is designed to
            delight, every experience is made to be remembered.
          </p>

          <div className="btnpart">
            <button className='orderbtn'>Order</button>   
            <button className='reservebtn'>Reserve</button>
          </div>
        </div>
      </div>
      <div className="adjust-popular">     
         <Populardish/>
      </div>
    </div>
  )
}

export default Home
