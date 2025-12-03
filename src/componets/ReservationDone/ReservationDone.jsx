import React from "react";
import "./ReservationDone.css";
import Header from '../Header/Header';
import table from '../../assets/table.png';
import { Link } from 'react-router-dom';

const ReservationDone = () => {
  return (
    <div className="home-container">
<Header/>

      <div className="reservation-card">
        {/* LEFT SIDE DATA */}
        <div className="reservation-done-box">
          <h2 className="done-title">Reservation Details</h2>

          <div className="done-row">
            <label>Name</label>
            <span>Mahesh Yadav</span>
          </div>

          <div className="done-row">
            <label>Ph No.</label>
            <span>+91 1122334455</span>
          </div>

          <div className="done-row">
            <label>Email</label>
            <span>MaheshY32@gmail.com</span>
          </div>

          <div className="done-row">
            <label>Date</label>
            <span>June 30, 2025 at 9:00 p.m.</span>
          </div>

          <div className="done-row">
            <label>Booking</label>
            <span>4</span>
          </div>

          <div className="done-row">
            <label>Table No.</label>
            <span>A1V6</span>
          </div>

          <div className="done-row">
            <label>Booking Id.</label>
            <span>S12FCB245</span>
          </div>

         <div className="btn-row">
  <Link to="/reservation" className="btn-edit">
    Edit
  </Link>

  <Link to="/home" className="btn-close">
    Close
  </Link>
</div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="reservation-image">     
           <img src={table} alt="dish" /> 
        </div>

      </div>

    </div>
  );
};

export default ReservationDone;
