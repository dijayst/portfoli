import React,{useState,useEffect} from "react";

import { useNavigate } from "react-router-dom";


export default function Homepage () {
  
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Trigger the visibility state after a delay (simulate mounting animation)
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/landing");
    };
        return (
            <div className="App">
      
            <header className="App-header">
              
              <div className="introtext">
            <div className={`animated-text ${isVisible ? "visible" : ""}`}><p>Creating innovations</p></div>
            <div className={`animated-text ${isVisible ? "visible" : ""}`}><p>For Everyday</p></div>
            <div className={`animated-text ${isVisible ? "visible" : ""}`}><p>people.</p></div></div>
            <button className="hover-button"onClick={handleClick}>EXPLORE</button>
           
      
            </header>
          </div>
        );
    
}
