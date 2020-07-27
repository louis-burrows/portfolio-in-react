import React, { Component } from 'react';
import styles from "./Code.module.scss"


class Code extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div className={styles.codeContainer}>
        
        <h1 className={styles.titleCode}>Code and Projects</h1>

        <div>Fizz-Buzz</div>
        <a href="https://github.com/louis-burrows/fizzbuzz">Code</a>
        <a href="https://louis-burrows.github.io/fizzbuzz/">Output</a>

        <div>Game - Reach The Treasure</div>
        <a href="https://github.com/louis-burrows/First-Game">Code</a>
        <a href="https://louis-burrows.github.io/First-Game/">Output</a>

        <div>Connecting to an API</div>
        <a href="#">Code</a>
        <a href="#">Output</a>

        <div>Client Project - Ewe4You</div>
        <a href="https://github.com/nology-tech/ewe4you">Code</a>
        <a href="https://ewe4youselfie.web.app/">Output</a>

      </div>
     );
  }
}
 
export default Code;