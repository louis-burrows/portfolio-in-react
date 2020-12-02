import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./SkillsCard.module.scss"
import { Link } from "@reach/router"


class SkillsCard extends Component {

  state = { 
    
  }

 
  render() { 

 
    const {
     skill,
    } = this.props.skills;


    return ( 
      
      <div>
       {skill}
      </div>
      

      
     );
  }
}
 
export default SkillsCard;