import React, { useState } from 'react';
import "./body.css";
import { Home, About, Skills, Experience, Education, Projects } from '../../components';
import { Bedtime } from '@mui/icons-material';

export default function Body() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`body ${isDarkMode ? 'dark' : ''}`}>
      <button className="mode-toggle" onClick={handleModeToggle}>
        <Bedtime/>
      </button>
      <Home />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <About />
    </div>
  );
}








// import React from 'react'
// import "./body.css"
// import { Home, About, Skills, Experience, Education, Projects } from '../../components'

// export default function Body() {
//   return (
//     <div className='body'>
//       <Home/>
//       <Skills/>
//       <Experience/>
//       <Education/>
//       <Projects/>
//       <About/>
//     </div>
//   )
// }
