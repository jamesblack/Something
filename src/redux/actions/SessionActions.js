import Reflux from 'reflux';

const SessionActions = Reflux.createActions({
  login: { children: ['fail', 'success'] },
  logout: { children: ['fail', 'success'] }
});

SessionActions.login.listen(function() {
  this.success('logged in');
});

SessionActions.logout.listen(function() {
  this.success('logged out');
});

export default SessionActions;
