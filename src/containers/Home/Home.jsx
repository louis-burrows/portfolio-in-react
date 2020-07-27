import React, { Component } from 'react';
import styles from "./Home.module.scss"

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <h1 className={styles.homeTitle}>Welcome</h1>
     );
  }
}
 
export default Home;