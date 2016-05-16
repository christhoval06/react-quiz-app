import React from 'react';
import {browserHistory} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FontAwesome from 'react-fontawesome';


class Rocket extends React.Component {
  render() {
    return(
        <FontAwesome
          className='rocket'
          name='fa fa-rocket'
          size='3x'
          />
    )
  }
}

export default class Accepted extends React.Component {


  render() {
    return(
      <div className="accept">
        <Rocket />
        <h1>accepted</h1>
      </div>
    )
  }
}
