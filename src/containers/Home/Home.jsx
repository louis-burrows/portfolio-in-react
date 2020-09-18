import React, { Component } from 'react';
import styles from "./Home.module.scss"

class Home extends Component {
  state = {
    circleIsExpanded: false,
    showTreeInCircle: false,
  };


  expandCircle = () => {
    this.setState({ circleIsExpanded: !this.state.circleIsExpanded });
    this.setState({ showTreeInCircle: !this.state.showTreeInCircle });
  };



  render() { 

    const flipStyles = this.state.circleIsExpanded ? styles.openCircle : "";

    const showTree = this.state.showTreeInCircle ? styles.treeVisible : "";

    return ( 
      <div>
        <h1 className={styles.homeTitle}>Welcome</h1>
        <span className={`${styles.circle} ${flipStyles} ${showTree}`}
        onClick={() => this.expandCircle()}></span>
      
      </div>
     );
  }
}
 
export default Home;