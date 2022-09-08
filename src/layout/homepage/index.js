import React from 'react';
import '../../assets/scss/all.scss';

// import { activityData } from '../../config';
import axiosAPI from '../../config';
import ActivityBox from '../../components/ActivityBox';

const Homepage = () => {
  const baseURL = '/index/stage/v1/data&27655702';

  const { newBlock, isLoading, isError } = axiosAPI(baseURL);

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
