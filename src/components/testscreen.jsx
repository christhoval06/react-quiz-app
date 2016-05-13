import React from 'react';
import {browserHistory} from 'react-router';

import Timer from './timer.jsx';
import QuestionBox from './questionbox.jsx';

// let questions = [
//   {Question:'',
//   Answer: ''}
// ]

export default class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      started: false
    }
  }

  _startTimer() {
    this.setState({started: true})
  }

  _stopTimer() {
    this.setState({started: false})
  }

  _showQuiz() {
    return(
      <div>
        <div className="timer-box">
          <Timer
        started={this.state.started}
        stopTimer={this._stopTimer.bind(this)}
        secondsRemaining="60"/>
      </div>
        <QuestionBox />
      </div>
    )
  }

  _beginTestButton() {
    return(
      <button
      className="begin-button"
      onClick={this._startTimer.bind(this)}>
      Begin Evaluation
    </button>
    )
  }

  render(){
    return(
      <div className="quiz-area">

        {this.state.started ?  this._showQuiz() : this._beginTestButton() }

    </div>)
  }
}
