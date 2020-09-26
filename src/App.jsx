import React, { Component } from 'react';

import styles from './App.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faCode, faLeaf, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import Routes from "./containers/Routes"
import Navbar from "./Components/Navbar"


library.add(fab, faHome, faCode, faLeaf, faBars, faEnvelope);

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <span>
      <div className={styles.appContainer}></div>
        <Navbar className={styles.navDisplay}/>
        <Routes className={styles.routes}/>
      </span> 
    );
  }
}
 
export default App;

