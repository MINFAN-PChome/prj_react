import { hot } from 'react-hot-loader/root';
import React from 'react';
import Homepage from './layout/homepage';
import Test from './layout/test';

const App = () => {
  return (
    <>
      {/* <Homepage /> */}
      <Test />
    </>
  );
};

export default hot(App);
