import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <p>Navbar works</p>
        <FontAwesomeIcon icon="bars"/>
        <FontAwesomeIcon icon="home"/>
        <FontAwesomeIcon icon="code"/>
        <FontAwesomeIcon icon="leaf"/>
        <FontAwesomeIcon icon="envelope"/>
      </>
     );
  }
}
 
export default Navbar;