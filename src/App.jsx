import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Contact from './Components/Contact/Contact';
import Commudle from './Components/Commudle/Commudle';
import Sponsors from './Components/Sponsors/Sponsors';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap'; // Update this line

function App() {
  return (
    <>
      <Hero />
      <About />
      <Commudle />
      <Sponsors />
      <Contact />
    </>
  );
}

export default App;