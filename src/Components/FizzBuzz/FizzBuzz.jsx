import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./FizzBuzz.module.scss"
import { Link } from "@reach/router"


class FizzBuzz extends Component {

  state = { 
    
   }


  
  render() { 
    return ( 
      <>
      <div className={styles.fizzBuzzContainer}>
        Fizz-Buzz
      </div>
      </>
     );
  }
}
 
export default FizzBuzz;