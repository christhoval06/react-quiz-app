import React from 'react';
import {browserHistory} from 'react-router';

import Timer from './timer.jsx';
import Quiz from './quiz.jsx';


export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      }
  }
  _loadBeginButton() {
    browserHistory.push('/quiz');
  }

  render() {
    return(<div className="welcome-box">
            <button
              className="start-button"
              onClick={this._loadBeginButton.bind(this)}>
            Start Test
            </button>
            <h1 className="uppercase">May the force be with you</h1>
      </div>)
  }
}
