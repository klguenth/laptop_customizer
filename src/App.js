import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Summary from './Summary/Summary.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
    this.updateFeature = this.updateFeature.bind(this)
  }
  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    return (
      <div className="App">
        <Header h1="Elf Computing" h3="Laptops" h5="Customize your laptop" />
        <main>
          <section className="main__form">
          <Main title="TECH SPECS AND CUSTOMIZATIONS" features={this.props.features} selected={this.state.selected} updateFeature={this.updateFeature} key={this.id} />
          </section>
          <section className="main__summary">
            <Summary className="main_summary" title="NEW GREENLEAF 2018" features={this.state.selected} key={this.id} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
