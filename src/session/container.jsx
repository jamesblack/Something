import React from 'react';
import StyleSheet from 'react-style';
import { RouteHandler } from 'react-router';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const SessionContainer = React.createClass({
  render() {
    return (
      <div styles={styles.container}>
        <RouteHandler />
      </div>
    );
  }
});

export default SessionContainer;
