import React, { useState } from 'react';
import './App.css';
import Header from './components/Navigation/Header';
import Hero from './components/Hero/Hero';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import OurProject from './components/OurProject/OurProject';
import OurClient from './components/OurClient/OurClient';
import Footer from './components/Footer/Footer';
import Auth from './auth/Auth';



function App() {

  const [listenerValue, setListenerValue] = useState(false);

  const updateListener = () => {
    setListenerValue(true);
  }

  return(
    <>
    {!listenerValue 
      ? <Auth updateListener={updateListener} /> 
      : <div className='main__container'>
          <Header />
            <main>
             <Hero />
             <WhatWeDo />
             <OurProject />
             <OurClient />
            </main>
          <Footer />
        </div>}
    </> 
  );
}

export default App;
