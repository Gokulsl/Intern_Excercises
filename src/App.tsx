import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home.js';
import Navbar from './components/Exercises/Navbar.js';
import FlexPlayground from './components/Exercises/FlexPlayground.js'
import Listingfromapi from './components/Exercises/ListingFromApi.js'
import Ui from './components/Exercises/UiComponents.js';
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
