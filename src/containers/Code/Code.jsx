import React, { Component } from 'react';
import styles from "./Code.module.scss";

import ProjectCard from "../../Components/ProjectCard";
import projects from "../../projects";

import SkillsCard from "../../Components/SkillsCard";

import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Code extends Component {
  state = { 
    popoutIsOpen: false,
   }

  openPopout = () => {
    this.setState({ popoutIsOpen: !this.state.popoutIsOpen });
  };

  render() { 

    const changePopout = this.state.popoutIsOpen ? styles.openThePopout : "";

    return ( 
      <div className={styles.codeContainer}>
        
        <h1 className={styles.titleCode}>Code and Projects</h1>
        

        <Slide triggerOnce delay={200} duration={1800}>

          <div className={`${styles.skillsList} ${styles.popOut} ${changePopout}`} onClick={() => this.openPopout()}>
            <h2 className ={styles.skillsListTitle}>Skills and Tools <FontAwesomeIcon icon={['fas', 'angle-double-right']} className={styles.arrowIcon}/></h2>
            <div>
              <SkillsCard />
            </div> 
          </div>
            
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