import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Components/Menu/Menu';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
      <NavBar/>
      <Banner/>
      <AboutUs/>
      <Menu/>
      <ContactUs/>
      <Footer/>
    </div> 
  ); 
}

export default App;
