import React from 'react';
import './App.css';
import Header from './components/Navigation/Header';
import Hero from './components/Hero/Hero';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import OurProject from './components/OurProject/OurProject';
import OurClient from './components/OurClient/OurClient';
import Footer from './components/Footer/Footer';
// import Auth from './auth/Auth';


function App() {
  return(
    <>
      <div className='main__container'>
          <Header />
        <main>
          <Hero />
          <WhatWeDo />
          <OurProject />
          <OurClient />
        </main>
        <footer>
          <Footer />
        </footer>
         
      </div>
     
    </>
     
  );
}

export default App;
