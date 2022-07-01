import React from 'react';
import ActivityBox from '../../components/ActivityBox';
import '../../assets/scss/all.scss';
import { activityData,productData } from '../../config';

function Homepage() {
  return (
    <main className='l-main'>
      <div className="l-container">
        {activityData.map((actData) => (
          <ActivityBox
            key={actData.id}
            tag={actData.tag}
            title={actData.title}
            hashtag={actData.hashtag}
            bgimg={actData.bgimg}
            productData={productData}
          />
        ))}
      </div>
    </main>
  );
}

export default Homepage;
