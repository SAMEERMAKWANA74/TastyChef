import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import Menu from './componets/Menu/Menu';
import Login from './componets/Login/Login';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;