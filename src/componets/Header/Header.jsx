import React from 'react';
import { Link } from 'react-router-dom';   // ✅ Import Link
import './Header.css';

const Header = () => {
  return (
    <div className="headcomp">
      <ul className="listitems"><li><Link to="/home">Home</Link></li>
<li><Link to="/menu">Menu</Link></li>

        <li><Link to="#">About Us</Link></li>
        <li><Link to="#">Reservation</Link></li>
        <li><Link to="/">Login</Link></li>   {/* ✅ points to default route */}
      </ul>
    </div>
  );
};

export default Header;
