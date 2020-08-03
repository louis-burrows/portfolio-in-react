import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./ProjectCard.module.scss"
import { Link } from "@reach/router"


class ProjectCard extends Component {

  state = { 
    
  }

 


 
  render() { 

 
    const {
      title,
      background,

    } = this.props.project;

    const backgroundCol = {
      backgroundColor: background
    }

    return ( 
      <>
      <div className={styles.projectCardContainer} style={backgroundCol}>
        {title}
  
        

      </div>

      </>
     );
  }
}
 
export default ProjectCard;