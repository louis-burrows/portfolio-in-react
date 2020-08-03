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

         {projects.map((project, index) => {
           return <ProjectCard key={index} project={project}/>
            
         })}
    
        
        {/* <div className={styles.projectCard1}>Fizz-Buzz</div>
        <a href="https://github.com/louis-burrows/fizzbuzz" target="_blank" rel='noopener noreferrer'>Code</a>
        <a href="https://louis-burrows.github.io/fizzbuzz/" target="_blank" rel='noopener noreferrer'>Output</a>
               
        
        <div className={styles.projectCard2}>Game - Reach The Treasure</div>
        <a href="https://github.com/louis-burrows/First-Game" target="_blank" rel='noopener noreferrer'>Code</a>
        <a href="https://louis-burrows.github.io/First-Game/" target="_blank" rel='noopener noreferrer'>Output</a>

        <div className={styles.projectCard3}>Connecting to an API</div>
        <a href="https://github.com/louis-burrows/movie-db" target="_blank" rel='noopener noreferrer'>Code</a>
        <a href="#" target="_blank" rel='noopener noreferrer'>Output</a>

        <div className={styles.projectCard4}>Client Project - Ewe4You</div>
        <a href="https://github.com/nology-tech/ewe4you" target="_blank" rel='noopener noreferrer'>Code</a>
        <a href="https://ewe4youselfie.web.app/" target="_blank" rel='noopener noreferrer'>Output</a> */}


      </div>
     );
  }
}
 
export default Code;