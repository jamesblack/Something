import React from 'react';
import StyleSheet from 'react-style';
import Reflux from 'reflux';
import SessionActions from '../redux/actions/SessionActions';
import SessionStore from '../redux/stores/SessionStore';

const styles = StyleSheet.create({
  loginBox: {
    padding: '20px 20px 20px',
    background: 'white',
    borderRadius: 3,
    boxShadow: '0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
  },
});

const Login = React.createClass({
  mixins: [Reflux.listenTo(SessionStore, 'onSessionChange')],

  onSessionChange(data) {
    if (data.error) this.setState({ error: data.error });
  },

  getInitialState() {
    return {

    };
  },

  onSubmit(e) {
    e.preventDefault();
    SessionActions.login(
      this.refs.login.getDOMNode().value,
      this.refs.password.getDOMNode().value);
  },

  render() {
    return (
      <div styles={styles.loginBox}>
        <h1 styles={styles.header}>Login to Prototype</h1>
        { this.state.error ?
          <h2>Unable to Login</h2>
          :
          null
        }
        <form onSubmit={this.onSubmit}>
          <p><input type='text' name='login' ref='login' placeholder='Email' /></p>
          <p><input type='password' name='password' ref='password' placeholder='Password' /></p>
          <p><input type='submit' name='commit' value='Login' /></p>
        </form>
      </div>
    );
  }
});

export default Login;
