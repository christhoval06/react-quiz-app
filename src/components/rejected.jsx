import React from 'react';
import {browserHistory} from 'react-router';

export default class Rejected extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  _loadWelcome(){
      browserHistory.push('/welcome');
  }


  _reload(){
  this.timeout = setInterval(this._loadWelcome.bind(this), 1000);
}

  render() {
    return(
      <div className="reject">
            Rejected

      </div>
    )
  }
}
