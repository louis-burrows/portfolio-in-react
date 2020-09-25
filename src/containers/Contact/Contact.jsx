import React, { Component } from 'react';
import styles from "./Contact.module.scss"

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={styles.contactPage}>

        <h2 className={styles.contactTitle}>Contact Information</h2>

        <a href="mailto:louisburrows@gmail.com" className={styles.contactParagraph}>Email me!</a>

        <a href="https://www.linkedin.com/in/louis-burrows-100727170/" target="_blank" className={styles.contactParagraph}>Linked-in</a>
         
        <a href="https://github.com/louis-burrows" target="_blank" className={styles.contactParagraph}>Github</a>
      </div>
     );
  }
}
 
export default Contact;