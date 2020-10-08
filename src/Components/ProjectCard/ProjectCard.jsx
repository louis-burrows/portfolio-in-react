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
      githublink,
      outputlink,
      description,
      techstack,

    } = this.props.project;

    const backgroundCol = {
      backgroundColor: background
    }

    return ( 
      
      <div className={styles.projectCardContainer} style={backgroundCol}>
        {title}
      <p className={styles.cardParagraph}>{description}</p>
      <p className={styles.cardParagraph}>{techstack}</p>
      
      <a className={styles.cardLink1} href={githublink} target="_blank" rel="noopener noreferrer">Github</a>
      <a className={styles.cardLink2} href={outputlink} target="_blank" rel="noopener noreferrer">Demo</a>
      
      </div>
      

      
     );
  }
}
 
export default ProjectCard;