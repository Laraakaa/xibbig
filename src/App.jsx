import React, { Component } from 'react';
import './App.css';

import MovingGibbix from './MovingGibbix';

import top from './img/top_edit.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gibbixes: []
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.gibbixes.length > 50) {
        return;
      }
      this.setState({
        gibbixes: [...this.state.gibbixes, <MovingGibbix key={Date.now()} />]
      });
    }, 1000);
  }

  render() {
    return (
      <div className="full-bg" style={{ backgroundImage: 'url(' + top + ')' }}>
        {this.state.gibbixes}
      </div>
    );
  }
}

export default App;
