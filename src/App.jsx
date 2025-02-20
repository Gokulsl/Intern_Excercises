import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Navbar from './components/navbar.jsx';
import FlexPlayground from './components/Flexplayground.jsx';
import Listingfromapi from './components/Listingfromapi';
import Ui from './components/Uicomponents.jsx';
import Login from './components/Login.jsx'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
     <Route path="/flexplayground" element={<FlexPlayground/>}/>
     <Route path="/listing" element={<Listingfromapi/>}/>
     <Route path="/ui" element={<Ui/>}/>
     <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
