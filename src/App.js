import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Components/Menu/Menu';

function App() {

  return (
    <div>
      <NavBar/>
      <Banner/>
      <Menu/>
    </div> 
  ); 
}

export default App;
