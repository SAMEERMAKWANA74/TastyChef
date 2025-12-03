import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import Menu from './componets/Menu/Menu';
import Sandwich from './componets/Menu/Sandwich';

import Login from './componets/Login/Login';
import Noodles from './componets/Menu/Noodles';
import Frenchfries from './componets/Menu/Frenchfries';
import AboutUs from './componets/AboutUs/AboutUs';
import Reservation from './componets/Reservation/Reservation';
import ReservationDone from './componets/ReservationDone/ReservationDone';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/home" element={<Home />} />        <Route path="/" element={<Login />} /> 

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/reservationdone" element={<ReservationDone />} />
        <Route path="/menu/burger" element={<Menu />} />
        <Route path="/menu/sandwich" element={<Sandwich />} />
        <Route path="/menu/noodles" element={<Noodles />} />
        <Route path="/menu/frenchfries" element={<Frenchfries />} />


      </Routes>
    </Router>
  );
}

export default App;