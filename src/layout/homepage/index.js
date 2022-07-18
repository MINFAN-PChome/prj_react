import React, { useEffect, useState } from 'react';
import '../../assets/scss/all.scss';
import { activityData } from '../../config';
import ActivityBox from '../../components/ActivityBox';

const Homepage = () => {
  const [themData, setThemData] = useState([]);
  const [hastTagData, setHastTagData] = useState([]);
  const [prodData, setProdData] = useState([]);
  activityData.forEach((item, index) => {
    if (item.Id === 1) {
      themData.push({
        id: index,
        themName: item.Link.Text2,
        themText: item.Link.Text,
        themBackgroundColor: item.Link.Background,
        themImg: item.Img.Src,
        themAlt: item.Img.Text,
      });
      // setThemData(...item, themData);
    }
    if (item.Id >= 2 && item.Id <= 6) {
      hastTagData.push({
        id: index,
        tagName: item.Link.Text,
        tagLink: item.Link.Url,
        tagType: item.ExtraData.ElementType,
      });
      // setHastTagData(...item);
    }
    if (item.Id >= 7) {
      prodData.push({
        id: index,
        prodName: item.Link.Text,
        prodPrice: item.Link.Text1,
        prodLink: item.Link.Url,
        prodImg: item.Img.Src,
        prodType: item.ExtraData.ElementType,
        prodTypeSort: item.ExtraData.Sort,
      });
      // setProdData(...item);
    }
  });

  useEffect(() => {
    // api refactored data
  }, []);
  console.log(themData);
  console.log(hastTagData);
  console.log(prodData);

  return (
    <main className='l-main'>
      <div className='l-container'>
        <ActivityBox themData={themData} hastTagData={hastTagData} prodData={prodData} />
      </div>
    </main>
  );
};

export default Homepage;
