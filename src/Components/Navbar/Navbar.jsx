import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Navbar.module.scss"
import { Link } from "@reach/router"


class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <div className={styles.navBar}>
        <p>Louis Burrows</p>
        <div className={styles.iconCollection}>

          {/* <FontAwesomeIcon icon="bars" className={styles.icon}/> */}


          <Link to="/">
            <FontAwesomeIcon icon="home" className={styles.icon}/>
          </Link>

          <Link to="code">
            <FontAwesomeIcon icon="code" className={styles.icon}/>
          </Link>

          <Link to="bio">
            <FontAwesomeIcon icon="leaf" className={styles.icon}/>
          </Link>
          
          <Link to="contact">
            <FontAwesomeIcon icon="envelope" className={styles.icon}/>
          </Link>

        </div>
      </div>
      </>
     );
  }
}
 
export default Navbar;