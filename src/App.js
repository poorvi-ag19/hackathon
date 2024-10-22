// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* Other components will go here */}
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
