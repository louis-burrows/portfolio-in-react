import React, { Component } from 'react';
import styles from "./Bio.module.scss"


class Bio extends Component {
  state = {  }

  
  render() { 

    

    return ( 

      <div className={styles.bioContainer}>
      
        <h1 className={styles.bioTitle}>
          Biography        
        </h1>
        <p className={styles.slow}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae dolores quaerat quidem ad, pariatur earum modi alias! Facilis hic optio saepe excepturi quam laudantium repellendus aperiam inventore laboriosam neque!</p>
        
       
      </div>
     );
  }
}
 
export default Bio;