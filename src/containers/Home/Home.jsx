import React, { Component } from 'react';

import styles from "./Home.module.scss"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import flowerButton from "../../images/flower-button.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Slide, Fade } from "react-awesome-reveal";



class Home extends Component {
  state = {
      circleIsExpanded: false,
      image1Shows: false,
      image2Shows: false,
      image3Shows: false,
  };
  
  expandCircle = () => {
    this.setState({ circleIsExpanded: !this.state.circleIsExpanded });
    this.setState({ image1Shows: !this.state.image1Shows });
    this.setState({ image2Shows: !this.state.image2Shows });
    this.setState({ image3Shows: !this.state.image3Shows });
  };


  render() { 

    const flipStyles = this.state.circleIsExpanded ? styles.buttonVanish : "";

    const showImage1 = this.state.image1Shows ? styles.slide1 : "";

    const showImage2 = this.state.image1Shows ? styles.slide2 : "";

    const showImage3 = this.state.image1Shows ? styles.slide3 : "";


    return ( 
      <div className={styles.homeContainer}>

        <Fade delay={500} duration={2000} className={styles.fades}>  
          <h1 className={styles.homeTitle}>Welcome</h1>
          {/* <button className={`${styles.growButton} ${flipStyles}`} onClick={() => this.expandCircle()}>
            <img src={flowerButton} alt="flower button" className={styles.flowerButton}/>
          </button> */}
        </Fade>

        <Slide triggerOnce delay={1000} duration={3000}>
         <Fade delay={1000} duration={1200} className={styles.fades}> 
            <div className={styles.arrowSlideAcross1}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
            </div>
          </Fade>
        </Slide>

        <Slide triggerOnce delay={800} duration={3000}>
         <Fade delay={2700} duration={500} className={styles.fades}> 
            <div className={styles.arrowSlideAcross2}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
            </div>
          </Fade>
        </Slide>

        <Slide triggerOnce delay={600} duration={3000}>
         <Fade delay={2450} duration={500} className={styles.fades}> 
            <div className={styles.arrowSlideAcross3}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
            </div>
          </Fade>
        </Slide>

        <Slide triggerOnce delay={400} duration={3000}>
         <Fade delay={2200} duration={500} className={styles.fades}> 
            <div className={styles.arrowSlideAcross4}>
              <FontAwesomeIcon icon={['fas', 'angle-double-right']}/>
            </div>
          </Fade>
        </Slide>

        





         {/* <Slide triggerOnce delay={1000} duration={2000} className={`${showImage1} ${styles.plant1}`}>
          <img src={image1} alt="1" className={styles.image1}/>
        </Slide>
        
        
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