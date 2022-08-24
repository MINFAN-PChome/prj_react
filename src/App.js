import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Homepage from './layout/homepage';

const App = () => {
  const [data, setData] = useState({});
  const baseURL = '/index/stage/v1/data&27655702';
  useEffect(() => {
    axios
      .get(baseURL)
      .then(
        (response) => {
          setData(response.data);
          console.log(response + '萬歲');
        },
        (err) => {
          console.log(err + '西咧');
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);
  if (!data) return null;
  return (
    <>
      <Homepage data={data} />
    </>
  );
};

export default hot(App);
