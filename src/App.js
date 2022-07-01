import React from "react";
import { hot } from 'react-hot-loader/root';
import Homepage from './layout/homepage';

class App extends React.Component {
  render() {
    return (
      <div>
      <Homepage />
    </div>
    );
  }
}

export default hot(App);
