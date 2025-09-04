import React, {useEffect, useRef} from 'react'
import pdf from '../pdf/resume.pdf'
import image from '../image.png'
import Typed from "typed.js";
  
const Home = () => {
 const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Narayan Kumar Pandey",
        "I'm full stack developer",
        "Androide Developer (React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);  
  return (
    <>
      <div className="container home" id="home" >
        <div className="left1" data-aos="fade-up-right"
    data-aos-duration="1000" >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right1">
          <div className="img"  data-aos="fade-up-left"
    data-aos-duration="1000" >
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

