import React, { Component } from 'react';
import styles from "./Home.module.scss"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"

import { Slide, Fade } from "react-awesome-reveal";


class Home extends Component {
  state = {
      circleIsExpanded: false,
      image1Shows: false,
  };
  
  expandCircle = () => {
    this.setState({ circleIsExpanded: !this.state.circleIsExpanded });
    this.setState({ image1Shows: !this.state.image1Shows });
  };


  render() { 

    const flipStyles = this.state.circleIsExpanded ? styles.buttonVanish : "";

    const showImage1 = this.state.image1Shows ? styles.slide1 : "";


    return ( 
      <div className={styles.homeContainer}>

        <Fade delay={1000} duration={2000} className={styles.fades}>  
          <h1 className={styles.homeTitle}>Welcome</h1>
          <button className={`${styles.growButton} ${flipStyles}`} onClick={() => this.expandCircle()}>
            Make things grow
          </button>
        </Fade>

         <Slide triggerOnce delay={200} duration={1500} className={showImage1}>
          <img src={image1} alt="1" className={styles.image1}/>
        </Slide>
        
        {/*
        <Slide triggerOnce delay={2600} duration={1500} className={styles.slide2}>
          <img src={image2} alt="2" className={styles.image2}/>
        </Slide>   

        <Slide triggerOnce delay={1500} duration={1500} direction={"right"} className={styles.slide3}>
          <img src={image3} alt="3" className={styles.image3}/>
        </Slide> */}
        
       
      
      </div>
     );
  }
}
 
export default Home;