import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./SkillsCard.module.scss"
import { Link } from "@reach/router"


class SkillsCard extends Component {

  state = { 
    
  }

 
  render() { 

 


    return ( 
    <div>
      <div className={styles.skillOrTool}>
        Javascript
      </div>
      <div className={styles.skillOrTool}>
        SCSS
      </div>
      <div className={styles.skillOrTool}>
        React
      </div>
      <div className={styles.skillOrTool}>
        Node.js
      </div>
      <div className={styles.skillOrTool}>
        Typescript
      </div>
      <div className={styles.skillOrTool}>
        Git and GitHub Flow
      </div>
      <div className={styles.skillOrTool}>
        Firebase
      </div>
      <div className={styles.skillOrTool}>
        Test-Driven Development
      </div>
      <div className={styles.skillOrTool}>
        RESTful APIs
      </div>
      <div className={styles.skillOrTool}>
        Agile working
      </div>
    </div>  

      
     );
  }
}
 
export default SkillsCard;