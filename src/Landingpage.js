
import React,{useState} from "react";

export default function Landingpage() {



  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };


  const rows = 4; // Number of rows
  const columns = 5; // Number of dots in a row
  const dots = Array.from({ length: rows * columns }); // Create an array for dots

  return (
    <div className="div">
<section>
<div className="effect-wrap">
    
   <div className="effect-1">
   </div>
   
   <div className=".effect-2">
    </div>
    <div className="triangle"></div>
    
   <div class="container">
    <div class="effect-3"></div>
    <div class="hover-box">
      <p> Hello 👋</p>
    
      <p>
   Thanks for visiting my Portfolio website! If you like what you see and you need me to work on a product, send me a message
  </p>
    </div>
  </div>
   
   <div className="effect-4"></div></div>

   <p>My approach to frontend engineering and technical writing is
            simple:
            <i>create with purpose, empathy, and attention to detail.</i></p>
<p></p>
<div className="container">
  <div className="triangle"></div>
  
  <div className="triangle2"></div>
  
  <div className="square"></div>
  
  <div className="square2"></div>
</div>

<div className="dot">
  <div></div>
  <div></div>
   <div></div>
    <div></div>
     <div></div>
      <div></div> 
      <div></div> 
      <div></div>
       <div></div>
       <div></div>
        <div></div>
         <div></div>
          <div></div> 
          <div></div>
        <div></div>
        <div></div> 
        <div></div> 
        <div></div> 
        <div></div>
         <div></div>
</div>
<div className="do">
      {dots.map((_, index) => (
        <div key={index}></div> // Render each dot
      ))}
    </div>

    <div>
    <p>My approach to frontend engineering and technical writing is</p><p>
            simple:
            <i>create with purpose, empathy, and attention to detail.</i></p>

    </div>


    <button onClick={toggleDarkMode} className="dark-mode-button">
      {darkMode ? "🌙" : "☀️"}
    </button>
    </section>
    <section>
      
    </section>
    
    <section></section>
    </div>
  )
}
