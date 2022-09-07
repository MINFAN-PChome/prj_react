import React, { useEffect, useState } from 'react';
import '../../assets/scss/all.scss';

// import { activityData } from '../../config';
import ActivityBox from '../../components/ActivityBox';
import axios from 'axios';

const Homepage = () => {
  const [newBlock, setNewBlock] = useState([]);
  const baseURL = '/index/stage/v1/data&27655702';
  useEffect(() => {
    axios.get(baseURL).then(
      (response) => {
        setNewBlock(response?.data?.window1?.Blocks);
        console.log(response + '萬歲');
      },
      (err) => {
        console.log(err + '西咧');
      }
    );
  }, []);

  return (
    <main className='l-main'>
      <div className='l-container'>
        {/* <ActivityBox themData={themData} hastTagData={hastTagData} prodData={prodData} key={BlockId} /> */}
        <ActivityBox newBlock={newBlock} />
      </div>
    </main>
  );
};

export default Homepage;
