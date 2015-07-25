import Reflux from 'reflux';
import SessionActions from '../actions/SessionActions';

const SessionStore = Reflux.createStore({

  init() {
    this.state = {};
    this.listenToMany(SessionActions);
  },

  onLoginSuccess(message) {
    console.log('what', message);
    this.state.loggedIn = true;
    this.trigger(this.state);
  },

  onLogout(message) {
    console.log(message);
  }

});

export default SessionStore;
