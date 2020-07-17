import React, { Component } from 'react';

import styles from './App.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCode, faLeaf, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import Routes from "./containers/Routes"
import Navbar from "./Components/Navbar"

library.add(faHome, faCode, faLeaf, faBars, faEnvelope);

class App extends Component {
  state = {  }
  render() { 
    return (  
      <>
        <Navbar />
        <Routes />
      </>
    );
  }
}
 
export default App;

