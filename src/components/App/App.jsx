import React from 'react';
// import axios from 'axios'; I think i don't need it here?
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import '@fontsource/roboto';//for MUI

//components
import OneFeeling from '../OneFeeling/OneFeeling';
import TwoUnderstanding from '../TwoUnderstanding/TwoUnderstanding';
import ThreeSupport from '../ThreeSupport/ThreeSupport';
import FourComments from '../FourComments/FourComments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';
{/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>//don't understand if this worked or not? was for font icon in Review */}
import Puppetmaster from '../Puppetmaster/Puppetmaster';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>It's fer yer own good!</h4>
        </header>
      </div>

      <Route path='/' exact>
        <OneFeeling />
      </Route>

      <Route path='/twoUnderstanding'>
        <TwoUnderstanding />
      </Route>

      <Route path='/threeSupport'>
        <ThreeSupport />
      </Route>

      <Route path='/fourComments'>
        <FourComments />
      </Route>

      <Route path='/review'>
        <Review />
      </Route>

      <Route path='/submitted'>
        <Submitted />
      </Route>

      <Route path='/admin'>
        <Puppetmaster />
      </Route>

    </Router>

  );
}

export default App;
