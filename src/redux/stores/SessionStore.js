import Reflux from 'reflux';
import SessionActions from '../actions/SessionActions';

const SessionStore = Reflux.createStore({

  init() {
    this.state = {};
    this.listenToMany(SessionActions);
  },

  onLogin() {
    this.state.pending = true;
    this.state.error = null;
    this.state.session = null;
    this.trigger(this.state);
  },

  onLoginFail() {
    this.state.pending = false;
    this.state.error = true;
    this.trigger(this.state);
  },

  onLoginSuccess(data) {
    this.state.pending = false;
    this.state.error = null;
    this.state.session = data;
    this.trigger(this.state);
  },

  onLogout(message) {
    console.log(message);
  }

});

export default SessionStore;
