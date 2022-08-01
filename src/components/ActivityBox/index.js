import React, { useEffect, useState } from 'react';
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
  const newThemData = [];
  const newHastTagData = [];
  const newProdData = [];
  const [themData, setThemData] = useState([]);
  const [hastTagData, setHastTagData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const { Nodes } = props;

  useEffect(() => {
    // api refactored data
    Nodes.forEach((item) => {
      if (item.Id === 1) {
        newThemData.push(item);
      }
      if (item.Id >= 2 && item.Id <= 6) {
        newHastTagData.push(item);
      }
      if (item.Id >= 7) {
        newProdData.push(item);
      }
    });
    setThemData(newThemData);
    setHastTagData(newHastTagData);
    setProdData(newProdData);
  }, [Nodes]);

  // // 筆數
  let page = 6;
  // 暫存頁
  const [pageCurrent, setPageCurrent] = useState(1);
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
              <img src={`https://cs-a.ecimg.tw${Img.Src}`} alt={Img.Text} />
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
  const atCallPre = (pageNum) => {
    if (pageCurrent <= 1) {
      pageCurrent = 1;
    }
    setPageCurrent(--pageNum);
    renderSwiper(pageNum);
  };
  const atCallNext = (pageNum) => {
    if (pageCurrent >= pageAverage()) {
      pageCurrent = pageAverage();
    }
    setPageCurrent(++pageNum);
    renderSwiper(pageNum);
  };
  const renderSwiper = (pageNum) => {
    pageNum = pageCurrent;
    const allData = [];
    for (let i = (pageNum - 1) * page; i < pageNum * page && i < prodData.length; i++) {
      allData.push(prodData[i]);
    }

    return (
      <div className='c-activityBox__slide'>
        <ul className='c-activityBox__productBox'>
          <ProductInfo prodData={allData} renderElementTypeUrl={renderElementTypeUrl} />
        </ul>
      </div>
    );
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
            onCallPre={atCallPre}
            onCallNext={atCallNext}
            pageAverage={pageAverage}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
