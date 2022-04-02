import React from 'react';
import axios from 'axios';
import './App.css';
import OneFeeling from '../OneFeeling/OneFeeling';
import TwoUnderstanding from '../TwoUnderstanding/TwoUnderstanding';
import ThreeSupport from '../ThreeSupport/ThreeSupport';
import FourComments from '../FourComments/FourComments';

function App() {

  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    
      <OneFeeling />
      <TwoUnderstanding />
      <ThreeSupport />
      <FourComments />
      </>
  );
}

export default App;
