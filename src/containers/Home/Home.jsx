import React, { Component } from 'react';
import styles from "./Home.module.scss"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"

import { Slide, Fade } from "react-awesome-reveal";


class Home extends Component {
  state = {
    
  };


  render() { 

    return ( 
      <div className={styles.homeContainer}>

        <Fade delay={2500} duration={2000}>  
          <h1 className={styles.homeTitle}>Welcome</h1>
        </Fade>

        <Slide triggerOnce delay={200} duration={1500} className={styles.slide1}>
          <img src={image1} alt="1" className={styles.image1}/>
        </Slide>
 
        <Slide triggerOnce delay={900} duration={1500} className={styles.slide2}>
          <img src={image2} alt="2" className={styles.image2}/>
        </Slide> 
        
        <Slide triggerOnce delay={1800} duration={1500} className={styles.slide3}>
          <img src={image3} alt="3" className={styles.image3}/>
        </Slide>
        
       
      
      </div>
     );
  }
}
 
export default Home;