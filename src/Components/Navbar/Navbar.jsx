import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Navbar.module.scss"


class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <div className={styles.navBar}>
        <p>Louis Burrows</p>
        <div className={styles.iconCollection}>
          <FontAwesomeIcon icon="bars" className={styles.icon}/>
          <FontAwesomeIcon icon="code" className={styles.icon}/>
          <FontAwesomeIcon icon="home" className={styles.icon}/>
          <FontAwesomeIcon icon="leaf" className={styles.icon}/>
          <FontAwesomeIcon icon="envelope" className={styles.icon}/>
        </div>
      </div>
      </>
     );
  }
}
 
export default Navbar;