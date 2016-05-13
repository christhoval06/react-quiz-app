import React from 'react';
import {browserHistory} from 'react-router';

let question = [
  {question:'What does Darth Vader say to Luke Skywalker in Episode 5?',
  answer: 'No. I am your father.'},
  {question:'Every Star Wars movie has been released in which month?',
  answer: 'May'},
  {question: 'How many languages is C3PO fluent in?',
  answer: 'Over six million'}
]

export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 0,
      correct: 0
    }
  }

  _submitAnswer(){
     this.refs.quizInput.value === question[this.state.question].answer ? this.setState({ correct: this.state.correct += 1}) : this.setState({ correct: this.state.correct});
     this.setState({ question: this.state.question += 1});
  }

  _submitted(e){
    e.preventDefault();
    {this._submitAnswer();
    this.refs.quizInput.value = '';}
  }

  render() {
    return(
        <div className="question-box">
          <h3>{question[this.state.question].question}</h3>
          <form onSubmit={this._submitted.bind(this)}>
            <input type="text" ref="quizInput"/>
          </form>
          <button className="submit-button"
                  onClick={this._submitAnswer.bind(this)}>
            <span className="uppercase">Submit answer</span>
          </button>
        </div>

    )
  }
}
