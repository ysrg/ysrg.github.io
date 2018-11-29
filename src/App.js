import React, { Component } from 'react';
import { FaMedium, FaGithub, FaEnvelope } from 'react-icons/fa';
import logo from './logo.svg';
import coinwatch from './img/coinwatch.png';
import ichaty from './img/ichaty.png';
import bookworm from './img/bookworm.png';
import moviespot from './img/moviespot.png';
import node from './img/node-logo.svg';
import go from './img/logo-go.png';
import js from './img/logo-js.svg';
import aws from './img/logo-aws.svg';
import mongo from './img/logo-mongo.svg';
import firebase from './img/logo-firebase.svg';
import redux from './img/logo-redux.svg';
import babel from './img/logo-babel.svg';
import heroku from './img/logo-heroku.svg';
import jest from './img/logo-jest.svg';
import graph from './img/logo-graph.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>ysrg</h1>
          <h2>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ysrg"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:mrsergiumoraru@gmail.com"
            >
              <FaEnvelope />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@msergey"
            >
              <FaMedium />
            </a>
          </h2>
        </header>
        <div className="content">
          <div className="about">
            Hi, I'm Sergey and I am a full-stack engineer. I love coding,
            reading, running and physics. I like simple-to-read code that is
            easy to reason about. Personal preferences are paradigms that
            enforce and promote composability. I often ponder over matters such
            as the approaching technological singularity or the probability that
            time is just an illusion we use to measure the entropy of our
            universe. My biggest strength is the ability to focus. I am the
            antithesis of multitasking. If you would like to hire me or just say
            hi, feel free to get in touch with me 👋.
          </div>
          <div className="stack">
            <div class="strike">
              <span>tech stack</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={go} className="App-logo" alt="logo" />
              <img src={js} className="App-logo" alt="js" />
              <img src={node} className="App-logo" alt="logo" />
              <img src={aws} className="App-logo" alt="aws" />
              <img src={heroku} className="App-logo" alt="heroku" />
              <img src={firebase} className="App-logo" alt="firebase" />
              <img src={graph} className="App-logo" alt="graph" />
              <img src={logo} className="App-logo" alt="logo" />
              <img src={redux} className="App-logo" alt="redux" />
              <img src={mongo} className="App-logo" alt="mongo" />
              <img src={babel} className="App-logo" alt="babel" />
              <img src={jest} className="App-logo" alt="jest" />
            </div>
          </div>
          <div class="strike">
            <span>my work</span>
          </div>
          <div className="gallery">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://binancevol.herokuapp.com/"
            >
              <img src={coinwatch} alt="coinwatch" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ichaty.herokuapp.com/"
            >
              <img src={ichaty} alt="ichaty" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://moonsky.herokuapp.com/"
            >
              <img src={moviespot} alt="mobiespot" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ysrg.github.io/bookworm/"
            >
              <img src={bookworm} alt="bookworm" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
