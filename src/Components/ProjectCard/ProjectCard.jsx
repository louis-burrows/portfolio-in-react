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
      <>
      <div className={styles.projectCardContainer} style={backgroundCol}>
        {title}
      <p className={styles.cardParagraph}>{description}</p>
      <p className={styles.cardParagraph}>{techstack}</p>
      <a className={styles.cardLink} href={githublink}>Github</a>
      <a className={styles.cardLink} href={outputlink}>Demo</a>
  
        

      </div>

      </>
     );
  }
}
 
export default ProjectCard;