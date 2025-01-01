import React, { useState } from 'react';
import './App.css'; // Ensure you have styles defined here.

function omr() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <label className="toggle">
        <input 
          type="checkbox" 
          id="switch" 
          onClick={toggleDarkMode} 
        />
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      </label>
      <h1>{darkMode ? 'Dark Mode is On' : 'Light Mode is On'}</h1>
      <p>Toggle the switch to change the theme.</p>
    </div>
  );
}

export default omr;
