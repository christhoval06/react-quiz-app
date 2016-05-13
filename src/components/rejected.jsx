import React from 'react';
import {browserHistory} from 'react-router';

export default class Rejected extends React.Component {
  _loadWelcome(){
    browserHistory.push('/welcome');
  }
  render() {
    return(
      <div className="reject">Rejected</div>
    )
  }
}
