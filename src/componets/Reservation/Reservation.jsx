import React from 'react';
import { Link } from 'react-router-dom';   // ✅ Import Link
import './Reservation.css';
import Header from '../Header/Header';
import serve from '../../assets/serve.png';

const Reservation = () => {
  return (
    <>
      <div className="home-container"> 
      <Header />
        <div className="reservation-card">

          {/* LEFT FORM */}
          <div className="reservation-form">

            <h2 className="form-title">Book Reserve / Edit Reserve</h2>
          <div className="form-row">
          <label>Name</label>
          <input type="text" placeholder="Enter Name"/>
        </div>

        <div className="form-row">
          <label>Ph No.</label>
          <input type="text" placeholder="+91"/>
        </div>

        <div className="form-row">
          <label>Email</label>
          <input type="text" placeholder="Enter Mail" />
        </div>

        <div className="form-row">
          <label>Date</label>
          <input type="text" placeholder="Enter Date And Time"/>
        </div>

        <div className="form-row">
          <label>Booking</label>
          <input type="text" placeholder="Enter Number of Booking" />
        </div>
<div className="btn-row">
  <button className="btn-common">Edit</button>
  <button className="btn-common">Save</button>
</div>

<Link to="/reservationdone" className="btn-confirm">
  Confirm
</Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="reservation-image">
          <img src={serve} alt="dish" /> 
          </div>

        </div>
      </div>

     
    </>
  );
};

export default Reservation;
