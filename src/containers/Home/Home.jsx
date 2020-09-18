import React, { Component } from 'react';
import styles from "./Home.module.scss"

class Home extends Component {
  state = {
    circleIsExpanded: false,
  };


  expandCircle = () => {
    this.setState({ circleIsExpanded: !this.state.circleIsExpanded });
  };

  render() { 

    const flipStyles = this.state.circleIsExpanded ? styles.openCircle : "";

    return ( 
      <div>
        <h1 className={styles.homeTitle}>Welcome</h1>
        <span className={`${styles.circle} ${flipStyles}`}
        onClick={() => this.expandCircle()}></span>
      
      </div>
     );
  }
}
 
export default Home;