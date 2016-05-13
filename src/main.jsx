import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Welcome from './components/welcome.jsx';
import Quiz from './components/quiz.jsx';
import NotFound from './components/error.jsx';
import Accepted from './components/accepted.jsx';
import Rejected from './components/rejected.jsx';

require ('./styles/main.scss');

class App extends React.Component {

  render() {

    return(
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome'/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/quiz' component={Quiz}/>
        <Route path='/accepted' component={Accepted}/>
        <Route path='/rejected' component={Rejected}/>
        <Route path='/*' component={NotFound}/>
      </Router>);
  }
}

ReactDOM.render(<App/>, document.getElementById('starwars-app'));
