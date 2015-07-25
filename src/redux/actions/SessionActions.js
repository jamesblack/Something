import Reflux from 'reflux';
import sessionService from '../services/session';

const SessionActions = Reflux.createActions({
  login: { children: ['fail', 'success'] },
  logout: { children: ['fail', 'success'] }
});

SessionActions.login.listen(function(username, password) {
  sessionService
    .login(username, password)
    .then(this.success)
    .catch(this.fail);
});

SessionActions.logout.listen(function() {
  this.success('logged out');
});

export default SessionActions;
