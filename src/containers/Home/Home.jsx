import React, { Component } from 'react';
import styles from "./Home.module.scss"

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1 className={styles.homeTitle}>Welcome</h1>
        <button className={styles.circle}></button>
      
      </div>
     );
  }
}
 
export default Home;