import React, { Component } from 'react';
import styles from "./Home.module.scss"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.jpg"
import image4 from "../../images/4.jpg"
import { Slide, Fade, Pulse, Flash, AttentionSeeker } from "react-awesome-reveal";


class Home extends Component {
  state = {
    
  };


  render() { 

    return ( 
      <div className={styles.homeContainer}>

        <Fade delay={2500} duration={2000}>  
        <h1 className={styles.homeTitle}>Welcome</h1>
        </Fade>

         {/* <Slide triggerOnce delay={1200} duration={2000}> */}
          <img src={image1} alt="1" className={styles.image1}/>
        {/* </Slide> */}
 {/*
        <Slide triggerOnce delay={900} duration={2000}>
          <img src={image2} alt="2" className={styles.image2}/>
        </Slide> */}
        {/*
        <Slide triggerOnce delay={600} duration={2000}>
          <img src={image3} alt="3" className={styles.image3}/>
        </Slide>
        
        <Slide triggerOnce delay={300} duration={2000}>
          <img src={image4} alt="4" className={styles.image4}/>
        </Slide> */}
     
      
      </div>
     );
  }
}
 
export default Home;