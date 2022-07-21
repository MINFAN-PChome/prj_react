import React from 'react';
import ProductInfo from '../ProductInfo';
import Page from '../object/Page';
import './activityBox.scss';

const renderElementTypeUrl = (type) => {
  switch (type) {
    case 'Store':
      return 'https://24h.pchome.com.tw/store/';
    case 'Prod':
      return 'https://24h.pchome.com.tw/prod/';
    case 'Search':
      return 'https://ecshweb.pchome.com.tw/search/v3.3/?q=';

    default:
      return '';
  }
};
const activityTag = '主題推薦';

const ActivityBox = (props) => {
  const { themData, hastTagData, prodData } = props;
  const renderActivity = () => {
    const activity = themData.map(
      ({ themId, themName, themBackgroundColor, themImg, themAlt }, index) => {
        return (
          <div className='c-activity' key={index}>
            <div
              className='c-activity__editThem'
              style={{ backgroundColor: `${themBackgroundColor}` }}
            >
              <div className='c-activity__info'>
                <div className='c-activity__tag'>
                  <div className='c-activity__tagEdit'>{activityTag}</div>
                </div>
                {<div className='c-activity__title'>{themName}</div>}
                <div className='c-activity__hashtagBox'>
                  <ul className='c-activity__hashtag'>{renderHastTag()}</ul>
                </div>
              </div>
              <div className='c-activity__theme'>
                <img src={themImg} alt={themAlt} />
              </div>
            </div>
          </div>
        );
      }
    );
    return activity;
  };
  const renderHastTag = () => {
    const hashTag = hastTagData.map((tag, index) => {
      const { tagId, tagName, tagLink, tagType } = tag;
      return (
        <li className='c-activity__item' key={index}>
          <a
            href={`${tagType === '' ? 'prodType' : renderElementTypeUrl(tagType)}` + tagLink}
            className='c-activity__link'
          >
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
          <div className='c-activityBox__wrapper'>
            <div className='c-activityBox__slide'>
              <ul className='c-activityBox__productBox'>
                <ProductInfo prodData={prodData} renderElementTypeUrl={renderElementTypeUrl} />
              </ul>
            </div>
          </div>
        </div>
        <div className='c-activityBox__page'>
          <Page />
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
