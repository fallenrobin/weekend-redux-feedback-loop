import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


import OneFeeling from '../OneFeeling/OneFeeling';
import TwoUnderstanding from '../TwoUnderstanding/TwoUnderstanding';
import ThreeSupport from '../ThreeSupport/ThreeSupport';
import FourComments from '../FourComments/FourComments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
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

    </Router>

  );
}

export default App;
