import React, { Component } from 'react';
import styles from "./Code.module.scss"
import ProjectCard from "../../Components/ProjectCard"
import projects from "../../projects"


class Code extends Component {
  state = { 


   }

  

 

  render() { 
    return ( 
      <div className={styles.codeContainer}>
        
        <h1 className={styles.titleCode}>Code and Projects</h1>

        <div className={styles.projectCardDisplay}>
          {projects.map((project, index) => {
           return <ProjectCard key={index} project={project}/>
          })}

        </div> 
      </div>
     );
  }
}
 
export default Code;