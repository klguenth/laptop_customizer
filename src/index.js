import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700,
      id: 1
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200,
      id: 2
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200,
      id: 3
    },
    {
      name: 'Bodhi Linux',
      cost: 300,
      id: 4
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98,
      id: 5
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345,
      id: 6
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500,
      id: 7
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400,
      id: 8
    },
  ]
};

ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));
