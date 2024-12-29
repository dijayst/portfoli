
import React,{useState} from "react";
import ster from './asset/ster.jpeg'
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


      <div className="cursor-effect"></div>
      <div>
<header>
<div className="effect-wrap">
    
   <div className="effect-1">
   </div>
   
    <div className="triangle"></div>
    
   
   <div className="effect-4"></div>
   </div>

   <div class="container">
    <div class="effect-3"></div>
    <div class="hover-box">
      <p> Hello 👋</p>
    
      <p>
   Thanks for visiting my Portfolio website! If you like what you see and you need me to work on a product, send me a message
  </p>
    </div>
  </div>
  
  <div className=".effect-2">
    </div>
  <p></p>
<div className="container">
  <div className="triangle"></div>
  
  <div className="triangle2"></div>
  
  <div className="square"></div>
  
  <div className="square2"></div>
  
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

</div>


    
<label class="toggle" for="switch" onClick={toggleDarkMode}>
{darkMode}
</label>
<div class="landing-text">
  <h1 >Israel Mitolu</h1>
  <p>My approach to frontend engineering and technical writing is
            simple:
            <i>create with purpose, empathy, and attention to detail.</i></p>

</div>
   
    </header>
    <main>
    <section className="about">
<div className="container">
  <div className="profile-img">
    <img src={ster} alt="logo"/>
  </div>
  <div  className="about-content">
    <div><h2>About Me</h2></div>
    <p className="red">
    Hello there, I'm Israel Mitolu - a frontend engineer and technical writer with a passion for creating digital experiences that are both beautiful and accessible. My mission is to build websites and applications that delight users, while also making them easy to use and navigate for everyone.<br/>
    <br/>

With 3+ years of experience in frontend development, I specialize in creating responsive, user-friendly interfaces using ReactJS, NextJS, TailwindCSS, and Typescript. I pay close attention to detail, always striving to make sure that every interaction is smooth, intuitive, and visually appealing. I'm also a strong advocate for web accessibility, ensuring that all my projects are accessible to all.
<br/>  <br/>
I'm also a passionate writer, with a blog and articles on various platforms, where I share my expertise and insights into the world of frontend development. I enjoy sharing my knowledge with others and helping fellow developers understand and be creative with web technologies.
    </p>
  </div>
</div>
    </section>
    


<section>
  <div className="service-container">
  <div><h2>My Services  </h2></div>
  <div class="service-item-container">
<div class="service-item">
  <h5>Frontend Development</h5>
<p>I craft responsive and user-friendly websites using modern web development technologies and frameworks such as React, NextJS and Typescript.</p>
</div>

<div class="service-item">
  <h5>Technical Writing</h5>
<p>I specialize in creating clear and concise technical documentation, including user manuals, help documentation, and API guides, that simplify complex concepts, educate your users, and enhance your product.</p>
</div>
  </div>
  </div>
</section>
<section id="projects" class="project">
<h5>— check out some </h5>
<h2>Stuff I’ve worked on 💻</h2>
<button style={{ backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`, }} >dsgfdhhgfj</button>
<div class="project-item-container">
  <div class="project-box">
    <a></a>
    <div class="project-box__link">
      <a>

      </a>
      <a></a>
      </div>
      <div class="project-box__content">
        <h3> iPhone 15 Landing Page </h3>
        <h5>React.js &nbsp; Tailwind CSS &nbsp; ThreeJS GSAP </h5>
      </div>
      </div>
     
      <div class="project-box">
    <a></a>
    <div class="project-box__link">
      <a>

      </a>
      <a></a>
      </div>
      <div class="project-box__content">
        <h3> iPhone 15 Landing Page </h3>
        <h5>React.js &nbsp; Tailwind CSS &nbsp; ThreeJS GSAP </h5>
      </div>
      </div>
      <div class="project-box">
    <a></a>
    <div class="project-box__link">
      <a>

      </a>
      <a></a>
      </div>
      <div class="project-box__content">
        <h3> iPhone 15 Landing Page </h3>
        <h5>React.js &nbsp; Tailwind CSS &nbsp; ThreeJS GSAP </h5>
      </div>
      </div>
   
      </div>
      
     
</section>
<section class="contact" id="contact">
  <div class="contact-title">
    <h5>— contact me</h5>
  <h2>🚀Let's collaborate </h2>
  </div>
  <div class="container">…
    <div class="sub"><p>Got a question, proposal or project or want to work<br/>
    together on something? Feel free to reach out.</p></div>
  
  <form action="POST" method="post">
    <input type="hidden" name="form-name" value="form 1"></input>
  <div class="input-row">
    <div class="side">
      <label for="name">Your Name</label>
      <input placeholder="Enter Your name" name="name" id="name" type="text" required value></input>
    </div>
    <div class="side">
      <label for="email">Your Email</label>
      <input placeholder="Enter Your email address" name="email" id="email" type="email" required value></input>
   
    </div>

  </div>
  <div class="textarea">
    <label for="message">Your Message</label>
    <textarea name="message" id="message" placeholder="Hi, I think we need you to work on this particular product. Reach out as soon as you can" required></textarea>

  </div>
  <button type="submit">Send Message.</button>
  </form>
  </div>
</section>
    
   </main>
   </div>
    </div>
  )
}