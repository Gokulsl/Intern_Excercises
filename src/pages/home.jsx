import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import React from 'react'
import './home.css'
const Home = () => {
  return (
    <>
    <div className='screen'>
    <Navbar/>
    <Sidebar/>
</div>    
    </>
)
}

export default Home;