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
  let newThemId = 1;
  let newTagId = 1;
  let newProdId = 1;

  useEffect(() => {
    // api refactored data
    activityData.forEach((item, index) => {
      if (item.Id === 1) {
        newThemData.push({
          themId: newThemId++,
          themName: item.Link.Text2,
          themText: item.Link.Text,
          themBackgroundColor: item.Link.Background,
          themImg: item.Img.Src,
          themAlt: item.Img.Text,
        });
        setThemData(newThemData);
      }
      if (item.Id >= 2 && item.Id <= 6) {
        newHastTagData.push({
          tagId: newTagId++,
          tagName: item.Link.Text,
          tagLink: item.Link.Url,
          tagType: item.ExtraData.ElementType,
        });

        setHastTagData(newHastTagData);
      }
      if (item.Id >= 7) {
        newProdData.push({
          prodId: newProdId++,
          prodName: item.Link.Text,
          prodPrice: item.Link.Text1,
          prodLink: item.Link.Url,
          prodImg: item.Img.Src,
          prodType: item.ExtraData.ElementType,
          prodTypeSort: item.ExtraData.Sort,
        });

        setProdData(newProdData);
      }
    });
  }, [activityData]);

  // console.log(newThemData);
  // console.log(newHastTagData);
  console.log(prodData);
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
