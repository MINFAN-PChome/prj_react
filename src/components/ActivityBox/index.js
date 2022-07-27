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

  // // 筆數
  let page = 6;
  // 暫存頁
  let pageCurrent = 1;
  const pageAll = prodData.length;

  const renderActivity = () => {
    const activity = themData.map((them) => {
      const { Id, Link, Img } = them;
      return (
        <div className='c-activity' key={Id}>
          <div className='c-activity__editThem' style={{ backgroundColor: `${Link.Background}` }}>
            <div className='c-activity__info'>
              <div className='c-activity__tag'>
                <div className='c-activity__tagEdit'>{activityTag}</div>
              </div>
              {<div className='c-activity__title'>{Link.Text2}</div>}
              <div className='c-activity__hashtagBox'>
                <ul className='c-activity__hashtag'>{renderHastTag()}</ul>
              </div>
            </div>
            <div className='c-activity__theme'>
              <img src={Img.Src} alt={Img.Text} />
            </div>
          </div>
        </div>
      );
    });
    return activity;
  };
  const renderHastTag = () => {
    const hashTag = hastTagData.map((tag) => {
      const { Id, Link, ExtraData } = tag;
      return (
        <li className='c-activity__item' key={Id}>
          <a
            href={
              `${Link.Url === '' ? 'prodType' : renderElementTypeUrl(ExtraData.ElementType)}` +
              Link.Url
            }
            className='c-activity__link'
          >
            #{Link.Text}
          </a>
        </li>
      );
    });
    return hashTag;
  };
  const pageAverage = () => {
    return Math.ceil(pageAll / page);
  };

  const renderSwiper = (pageNum) => {
    pageCurrent = pageNum;
    const allData = [];
    for (
      let i = (pageCurrent - 1) * pageNum;
      i < pageCurrent * pageNum && i < prodData.length;
      i++
    ) {
      allData.push(prodData[i]);
    }
    console.log(pageCurrent);

    // console.log(pageAll + 'pageAll');
    console.log(pageNum);
    console.log(allData);
    return (
      <div className='c-activityBox__slide'>
        <ul className='c-activityBox__productBox'>
          <ProductInfo prodData={prodData} renderElementTypeUrl={renderElementTypeUrl} />
        </ul>
      </div>
    );
  };

  const atClick = () => {
    console.log('hi');
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
          <div className='c-activityBox__wrapper'>{renderSwiper()}</div>
        </div>
        <div className='c-activityBox__page'>
          <Page
            pageCurrent={pageCurrent}
            pageAverage={pageAverage}
            renderSwiper={renderSwiper}
            atClick={atClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
