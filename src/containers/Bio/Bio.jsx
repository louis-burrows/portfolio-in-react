import React, { Component } from 'react';
import styles from "./Bio.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Bio extends Component {
  state = { 
    popoutIsOpen: false,
   }

  openPopout = () => {
    this.setState({ popoutIsOpen: !this.state.popoutIsOpen });
  };


  render() { 

    const changePopout = this.state.popoutIsOpen ? styles.openThePopout : "";


    return ( 

      <div className={styles.bioContainer}>
      
        <h1 className={styles.bioTitle}>
          Biography        
        </h1>
        <p className={styles.slow}>My introduction to coding began during university whilst studying plant biology and learning python. I worked within a team who were focussed on analysing gene mutations affecting root growth patterns for the purpose of improving crop performance. They had created a program called RootNav to track and quantify these growth patterns, and I saw how many thousands of hours of labour could be saved through some intuitive programming.</p>

        <p className={styles.slow2}>I began to recognise more potential applications for software, and with this my interest only developed. I decided to refocus my learning predominantly in the direction of coding, and this commenced with an intensive coding boot camp, where I was introduced to an array of languages and libraries. Since this experience, my interest and desire to learn and contribute have increased exponentially, as every new skill has widened my perception of what is possible.</p>

        <p className={styles.slow3}>What fascinates me at present is the connection between form and function, and the subtle UI and UX design considerations orchestrated throughout websites and applications to make them both appealing and responsive to the user.</p>

        <div className={`${styles.bioTitle} ${styles.popOut} ${changePopout}`} onClick={() => this.openPopout()}>
          Hobbies and Interests <FontAwesomeIcon icon={['fas', 'angle-double-right']} className={styles.arrowIcon}/>
          <div>
            <p className={styles.interestParagraph}>Green Spaces and Urban Farming</p>
            <p className={styles.interestParagraph}>Perfumery</p>
            <p className={styles.interestParagraph}>Travel</p>
            <p className={styles.interestParagraph}>Mycology</p>
            <p className={styles.interestParagraph}>Art and Design</p>
          </div>
        </div>

        <div className={styles.transparentBox}></div>
        
      
                

       
      </div>
     );
  }
}
 
export default Bio;