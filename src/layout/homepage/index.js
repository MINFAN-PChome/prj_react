import React, { useEffect, useState } from 'react';
import '../../assets/scss/all.scss';

import { activityData } from '../../config';
import ActivityBox from '../../components/ActivityBox';

const Homepage = () => {
  const newThemData = [];
  const newHastTagData = [];
  const newProdData = [];
  const [themData, setThemData] = useState([]);
  const [hastTagData, setHastTagData] = useState([]);
  const [prodData, setProdData] = useState([]);
  useEffect(() => {
    // api refactored data
    activityData.forEach((item) => {
      if (item.Id === 1) {
        newThemData.push(item);
      }
      if (item.Id >= 2 && item.Id <= 6) {
        newHastTagData.push(item);
      }
      if (item.Id >= 7) {
        newProdData.push(item);
        setProdData(newProdData);
      }
    });
    setThemData(newThemData);
    setHastTagData(newHastTagData);
    setProdData(newProdData);
  }, [activityData]);

  // console.log(newThemData);
  // console.log(newHastTagData);
  // console.log(prodData);
  // console.log(newProdData);

  return (
    <main className='l-main'>
      <div className='l-container'>
        <ActivityBox themData={themData} hastTagData={hastTagData} prodData={prodData} />
      </div>
    </main>
  );
};

export default Homepage;
