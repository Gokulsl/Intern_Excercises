import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Navbar from './components/Navbar';
import FlexPlayground from './components/Flexplayground.jsx';
import Listingfromapi from './components/Listingfromapi';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/flexplayground" element={<FlexPlayground/>}/>
     <Route path="/listing" element={<Listingfromapi/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
