import React from 'react';

import './styles.css';

import Image from '../Image';
import RateBoard from '../RateBoard';

const App = () => (
  <div>
    <h1 className="ui center aligned header">Rate random cat</h1>
    <div className="ui three column centered grid container">
      <div className="column">
        <Image />
      </div>
      <div className="two column centered row">
        <div className="column">
          <RateBoard />
        </div>
      </div>
    </div>
  </div>
);

export default App;
