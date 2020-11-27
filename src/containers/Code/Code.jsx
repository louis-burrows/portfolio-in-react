import React, { Component } from 'react';
import styles from "./Code.module.scss"
import ProjectCard from "../../Components/ProjectCard"
import projects from "../../projects"
import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Code extends Component {
  state = { 

   }


  render() { 
    return ( 
      <div className={styles.codeContainer}>
        
        <h1 className={styles.titleCode}>Code and Projects</h1>
        

        <Slide triggerOnce delay={200} duration={1800}>

          <h1 className={styles.skillsList}>Skills and Tools <FontAwesomeIcon icon={['fas', 'angle-double-right']} className={styles.arrowIcon}/></h1>
            
          <div className={styles.projectCardDisplay}>
            {projects.map((project, index) => {
            return <ProjectCard key={index} project={project}/>
            })}
          </div> 
        </Slide>

      </div>
    );
  }
}
 
export default Code;