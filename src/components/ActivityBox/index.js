import React from 'react';
import ProductInfo from '../ProductInfo';
import Button from '../Button';
import Icon from '../Icon';
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

const renderPage = (props) => {
  const { prodData } = props;
  const pageStemp = 6;
  const pageAverage = Math.ceil(prodData / pageStemp);
};

const ActivityBox = (props) => {
  const { themData, hastTagData, prodData } = props;
  const renderActivity = () => {
    const activity = themData.map(({ id, themName, themBackgroundColor, themImg, themAlt }) => {
      return (
        <div className='c-activity' key={id}>
          <div
            className='c-activity__editThem'
            style={{ backgroundColor: `${themBackgroundColor}` }}
          >
            <div className='c-activity__info'>
              <div className='c-activity__tag'>
                <div className='o-tag'>主題推薦</div>
              </div>
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
          <a
            href={`${tagType === '' ? 'prodType' : renderElementTypeUrl(tagType)}` + tagLink}
            className='o-hashtag__tag'
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
          <div className='o-page'>
            <div className='o-page__btn'>
              <Button
                style='o-btn o-btn--circle o-btn--prev'
                startIcon={<Icon style='o-icon o-icon--prev' />}
              ></Button>
            </div>
            <div className='o-page__pagination'>1/3</div>
            <div className='o-page__btn'>
              <Button
                style='o-btn o-btn--circle o-btn--next'
                startIcon={<Icon style='o-icon o-icon--next' />}
              ></Button>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
