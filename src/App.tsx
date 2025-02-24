import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home.js';
import Navbar from './components/Exercises/navbar.js';
import FlexPlayground from './components/Exercises/Flexplayground.js'
import Listingfromapi from './components/Exercises/Listingfromapi.js'
import Ui from './components/Exercises/Uicomponents.js';
import Login from './components/Exercises/Login.js'
import Weather from './components/pages/Weather.js'
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
