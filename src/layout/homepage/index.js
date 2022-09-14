import React, { useEffect, useState } from 'react';

import '../../assets/scss/all.scss';

// import { activityData } from '../../config';
import axiosAPI from '../../config';
import ActivityBox from '../../components/ActivityBox';

const Homepage = () => {
  const baseURL = '/index/stage/v1/data&27655702';

  const { newData, isLoading, isError } = axiosAPI(baseURL);
  const [newBlock, setNewBlock] = useState([]);
  const [newTab, setNewTab] = useState([]);

  useEffect(() => {
    setNewBlock(newData?.window1?.Blocks);
    setNewTab(newData?.window1?.Blocks[0]?.Nodes);
  }, [newData]);

  return (
    <main className='l-main'>
      <div className='l-container'>
        {/* <ActivityBox themData={themData} hastTagData={hastTagData} prodData={prodData} key={BlockId} /> */}
        <ActivityBox newBlock={newBlock} newTab={newTab} setNewTab={setNewTab} />
      </div>
    </main>
  );
};

export default Homepage;
