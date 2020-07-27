import React, { Component } from 'react';
import styles from "./Bio.module.scss"

class Bio extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        {/* <Link to="../../../public/files/cv.pdf" target="_blank" download>Download</Link> */}
        <h1 className={styles.bioTitle}>Biography</h1>
        <p className={styles.intro}>An ambitious, driven and self-motivated individual, who is experienced in administration, verbal and written communication techniques, and who values excellent customer and client service and wants to make his career a lifelong process of learning and self-improvement.</p>
      </div>
     );
  }
}
 
export default Bio;