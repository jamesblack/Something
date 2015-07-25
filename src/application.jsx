import React from 'react';
import Reflux from 'reflux';
import SessionStore from './redux/stores/SessionStore';
import SessionActions from './redux/actions/SessionActions';

const Application = React.createClass({
  mixins: [Reflux.connect(SessionStore, 'session')],

  getInitialState() {
    return {
      session: {}
    };
  },

  render() {
    return (
      <div>
        { this.state.session.loggedIn ? 'Logged In' : 'Logged Out' }
        <button onClick={SessionActions.login}>Test</button>
      </div>
    );
  },

});

export default Application;
