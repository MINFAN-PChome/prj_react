import React from 'react';
import ProductInfo from '../ProductInfo';
import './activityBox.scss';

// function Hashtag(props) {
//   const { value } = props;
//   return (
//     <li className='o-hashtag__item'>
//       <span className='o-hashtag__tag'>{value}</span>
//     </li>
//   );
// }

function ProductItem(props) {
  return <></>;
}

// const renderElementTypeUrl = (type) => {
//   switch (type) {
//     case 'Store':
//       return 'https://24h.pchome.com.tw/store/';
//     case 'Prod':
//       return 'https://24h.pchome.com.tw/prod/';
//     case 'Search':
//       return 'https://ecshweb.pchome.com.tw/search/v3.3/?q=';

//     default:
//       return '';
//   }
// };
// {
//   type === 'Url' ? 'url' : renderElementTypeUrl(type);
// }

const ActivityBox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { themData, hastTagData, prodData } = props;
  // console.log(themData);
  const renderActivity = () => {
    const activity = themData.map(({ id, themName, themBackgroundColor, themImg, themAlt }) => {
      return (
        <div className='c-activity' key={id}>
          <div
            className='c-activity__editThem'
            style={{ backgroundColor: `${themBackgroundColor}` }}
          >
            <div className='c-activity__info'>
              <div className='c-activity__tag'>{/* <div className='o-tag'>{tag}</div> */}</div>
              {<div className='c-activity__title'>{themName}</div>}
              <div className='c-activity__hashtag'>
                <ul className='o-hashtag'>{renderHastTag()}</ul>
              </div>
            </div>
            <div className='c-activity__theme'>
              <img src={themImg} alt={themAlt} />
            </div>
          </div>
        </div>
      );
    });
    return activity;
  };
  const renderHastTag = () => {
    const hashTag = hastTagData.map((tag) => {
      const { id, tagName, tagLink, tagType } = tag;
      return (
        <li className='o-hashtag__item' key={id}>
          <a href={tagLink} className='o-hashtag__tag'>
            #{tagName}
          </a>
        </li>
      );
    });
    return hashTag;
  };

  // type FirstLink = {
  //   Text: string,
  //   Text2: string,
  //   backgroundColor: string,
  // };
  // type FirstImg = {
  //   Src: string,
  //   Text: string,
  // };
  // type themDataType = {
  //   Id: number,
  //   Link: Array<FirstLink>,
  //   Img: Array<FirstImg>,
  // };

  return (
    <div className='c-activityBox'>
      <div className='c-activityBox__main'>{renderActivity()}</div>
      <div className='c-activityBox__product'>
        <div className='c-activityBox__info'>
          <ul className='c-activityBox__info'>
            {prodData.map((id, prodName, prodPrice, prodLink, prodImg) => {
              <ProductInfo
                key={id}
                prodName={prodName}
                prodPrice={prodPrice}
                prodLink={prodLink}
                prodImg={prodImg}
              />;
            })}
          </ul>
        </div>
        <div className='c-activityBox__page'>
          <div className='o-page'>
            <div className='o-page__btn'>
              <div className='o-btn--prev'></div>
            </div>
            <div className='o-page__pagination'></div>
            <div className='o-page__btn'>
              <div className='o-btn--next'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
