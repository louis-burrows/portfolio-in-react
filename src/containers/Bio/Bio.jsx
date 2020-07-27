import React, { Component } from 'react';
import styles from "./Bio.module.scss"

class Bio extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {/* <Link to="../../../public/files/cv.pdf" target="_blank" download>Download</Link> */}
        <h1 className={styles.bioTitle}>Biography</h1>
      </div>
     );
  }
}
 
export default Bio;