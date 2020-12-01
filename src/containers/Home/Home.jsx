import React, { Component } from 'react';

import styles from "./Home.module.scss"
import image1 from "../../images/1.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

    const flipStyles = this.state.circleIsExpanded ? styles.buttonGrows : "";

    const showImage1 = this.state.image1Shows ? styles.slide1 : "";


    return ( 
      <div className={styles.homeContainer}>

        <Fade delay={500} duration={2000} className={styles.fades}>  
          <h1 className={styles.homeTitle}>Welcome</h1>
        </Fade>

        <Slide triggerOnce delay={1000} duration={2000}>
          <Fade delay={1000} duration={1200} className={styles.fades}> 
            <div className={styles.arrowSlideAcross1}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
            </div>
          </Fade>
        </Slide>

        <Fade delay={2600} duration={500} className={styles.fades}> 
          <div className={styles.arrowSlideAcross2}>
            <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
          </div>
        </Fade>
        
        <Fade delay={2500} duration={500} className={styles.fades}> 
          <div className={styles.arrowSlideAcross3}>
            <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
          </div>
        </Fade>
        
        <Fade delay={2400} duration={500} className={styles.fades}> 
          <div className={styles.arrowSlideAcross4}>
            <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
          </div>
        </Fade>

        <Fade delay={2700} duration={500} className={styles.fades}> 
          <div className={styles.arrowSlideDown1}>
            <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
          </div>
        </Fade>

        <Fade delay={4500} duration={2000} className={styles.fades}>
          <button className={`${styles.growButton} ${flipStyles}`} onClick={() => this.expandCircle()}>
          </button>
        </Fade>


        
        
        <Fade triggerOnce delay={1800} duration={700} className={`${showImage1} ${styles.pictureOfLouis}`}>
          <img src={image1} alt="1" className={styles.image1}/>
        </Fade>
        
        
        {/*
        <Slide triggerOnce delay={1600} duration={2000} className={`${showImage2} ${styles.plant2}`}>
          <img src={image2} alt="2" className={styles.image2}/>
        </Slide>   

        <Slide triggerOnce delay={2200} duration={2000} className={`${showImage3} ${styles.plant3}`}>
          <img src={image3} alt="3" className={styles.image3}/>
        </Slide> */}
        
       
      
      </div>
     );
  }
}
 
export default Home;