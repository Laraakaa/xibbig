import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';

import MovingGibbix from './MovingGibbix';
import GibbixJump from './GibbixJump';

import top from './img/top_edit.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gibbixes: [],
      showJump: false
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

  onPlay() {
    console.log('Started playing');
    setTimeout(() => {
      this.setState({ showJump: true });
      setTimeout(() => {
        this.setState({ showJump: false });
      }, 2000);
    }, 56000);
    //}, 2000);
  }

  render() {
    return (
      <div>
        <div
          className="full-bg"
          style={{
            backgroundImage: 'url(' + top + ')',
            display: this.state.showJump ? 'none' : 'block'
          }}
        >
          {this.state.gibbixes}
          <div className="hidden-player">
            <YouTube
              videoId="K0tXhd7u56k"
              id="K0tXhd7u56k"
              className="hidden-player-yt"
              onReady={e => {
                e.target.setVolume(100);
                this.onPlay();
              }}
              onEnd={e => {
                e.target.seekTo(0);
                this.onPlay();
              }}
              opts={{
                playerVars: {
                  autoplay: 1
                }
              }}
            />
          </div>
        </div>
        {this.state.showJump && <GibbixJump />}
      </div>
    );
  }
}

export default App;
