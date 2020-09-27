import React, { Component } from 'react';
import styles from './Routes.module.scss';
import { Router } from "@reach/router"
import Home from "../Home"
import Bio from "../Bio"
import Contact from "../Contact"
import Code from "../Code"

class Routes extends Component {
  render() { 
    return ( 
      <Router className={styles.routes}>
        <Home path="/" />
        <Bio path="bio" />
        <Contact path="contact" />
        <Code path="code" />
      </Router>
     );
  }
}
 
export default Routes;