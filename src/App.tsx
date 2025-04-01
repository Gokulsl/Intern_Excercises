import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from'@tanstack/react-query';
import Home from './components/pages/Home.js';
import Navbar from './components/Exercises/Navbar.js';
import FlexPlayground from './components/Exercises/FlexPlayground.js'
import Listingfromapi from './components/Exercises/ListingFromApi.js'
import Ui from './components/Exercises/UiComponents.js';
import Login from './components/Exercises/Login.js'
import Weather from './components/pages/Weather.js'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false}/> 
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
    </QueryClientProvider>
  );
}

export default App;
