import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Navbar from './components/navbar.js';
import FlexPlayground from './components/Flexplayground.js'
import Listingfromapi from './components/Listingfromapi.js'
import Ui from './components/Uicomponents.js';
import Login from './components/Login.js'
import Weather from './pages/Weather.js'
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
     <Route path="/flexplayground" element={<FlexPlayground/>}/>
     <Route path="/listing" element={<Listingfromapi/>}/>
     <Route path="/ui" element={<Ui/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/weather" element={<Weather/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
