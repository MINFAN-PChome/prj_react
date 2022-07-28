import React from 'react';
import '../../assets/scss/all.scss';

import { activityData } from '../../config';
import ActivityBox from '../../components/ActivityBox';

const Homepage = () => {


  return (
    <main className='l-main'>
      <div className='l-container'>
        {activityData.window1.Blocks.map((them)=>{
          const {BlockId,Nodes} = them;
          return(
            // <ActivityBox themData={themData} hastTagData={hastTagData} prodData={prodData} key={BlockId} />
            <ActivityBox key={BlockId} Nodes={Nodes} />
            )
        })}

      </div>
    </main>
  );
};

export default Homepage;
