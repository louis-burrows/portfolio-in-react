import React, { Component } from 'react';
import styles from "./Contact.module.scss"

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className={styles.contactPage}>
        <h2>Contact Page</h2>
        <p className={styles.title}>Email: </p>
        <p>louisburrows@gmail.com</p>
        <p className={styles.title}>Linked-in: </p>
        <p>https://www.linkedin.com/in/louis-burrows-100727170/</p>
        <p className={styles.title}>Facebook: </p>
        <p>https://www.facebook.com/louis.burrows.3363</p>     
      </div>
     );
  }
}
 
export default Contact;