import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Sidebar, Body, Footer } from './containers';

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Sidebar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
