import { hot } from 'react-hot-loader/root';
import React from 'react';
import Homepage from './layout/homepage';

class App extends React.Component {
  render() {
    return (
      <>
        <Homepage />
      </>
    );
  }
}

export default hot(App);
