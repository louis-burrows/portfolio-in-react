import React, { Component } from 'react';
import styles from "./Contact.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={styles.contactPage}>

        <h2 className={styles.contactTitle}>Contact Information</h2>

        <a href="mailto:louisburrows123@outlook.com" className={styles.contactLink}><FontAwesomeIcon icon="envelope" className={styles.iconContact}/></a>
        

        <a href="https://www.linkedin.com/in/louis-burrows-100727170/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.iconContact}/></a>
        

        <a href="https://github.com/louis-burrows" target="_blank" rel="noopener noreferrer" className={styles.contactLink}><FontAwesomeIcon icon={['fab', 'github']} className={styles.iconContact}/></a>
        

      </div>
     );
  }
}
 
export default Contact;