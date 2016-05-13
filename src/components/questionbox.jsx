import React from 'react';
import {browserHistory} from 'react-router';


export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appear: false
    }
  }

  render() {
    return(
        <div className="question-box">
          <h3>Star Wars Question</h3>
          <input type="text"/>
          <button className="submit-button">
            <span className="uppercase">Submit answer</span>
          </button>
        </div>

    )
  }
}
