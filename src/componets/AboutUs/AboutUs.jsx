import React from 'react'
import './AboutUs.css';
import Header from '../Header/Header';
import whatsappimg from '../../assets/whatsappimg.png';
import instaimg from '../../assets/instaimg.png';

const AboutUs = () => {
  return (
    <>    
    <div className="home-container">
          <Header/>
          <div className="homedesing">
              <div className="firstlayer">
                      <div className="secondlayer">
                            <h1>"Reserve the moment. Relish the experience."</h1>
                            <p>Welcome to TastyChef – your go-to destination for <br/>reserving the perfect dining experience with just a few clicks.</p>
                            <p>At TastyChef, we blend technology with taste. Our mission <br/> is to make your dining reservation seamless, convenient, <br/> and enjoyable, so you can focus on what truly matters - <br/>great food and cherished moments. Whether it’s a casual <br/> lunch, a romantic dinner, or a family gathering, we help you <br/>reserve the right table, at the right time, in just a few <br/> seconds.</p>
                            <p>Our team is passionate about hospitality and innovation, <br/>ensuring you get real-time updates, smooth edits, and <br/>instant booking confirmations. With a user-friendly <br/>interface and elegant design, TastyChef is built to give you <br/>a premium experience from your screen to your seat.</p>
                            <h2>Stay Connected</h2>
                          <div className="imgsection">
                              <a 
                                href="https://github.com/SAMEERMAKWANA74/TastyChef" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <img className="whatsappimg" src={instaimg} alt="GitHub" />
                              </a>

                              <a 
                                href="https://github.com/SAMEERMAKWANA74/TastyChef" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <img className="instaimg" src={whatsappimg} alt="GitHub" />
                              </a>
                            </div>

                          
                            
                      </div>
              </div>
          </div>
          
    </div> 
    </>
  )
}

export default AboutUs
