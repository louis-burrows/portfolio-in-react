import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./ProjectCard.module.scss"
import { Link } from "@reach/router"


class ProjectCard extends Component {

  state = { 
    
   }


  
  render() { 
    return ( 
      <>
      <div className={styles.ProjectCardContainer}>
        ProjectCard
      </div>
      </>
     );
  }
}
 
export default ProjectCard;