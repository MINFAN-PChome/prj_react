import React, { useEffect, useState } from 'react';
import ProductInfo from '../ProductInfo';
import Page from '../object/Page';
import HastTag from '../object/HastTag';

import ToolBar from '../ToolBar';
import './activityBox.scss';
import getElementTypeUrl from './../../utils/getElementTypeUrl';

const ActivityBox = ({ activityTag = '主題推薦', newBlock, newTab, setNewTab }) => {
  const newThemData = [];
  const newHastTagData = [];
  const newProdData = [];
  const [themData, setThemData] = useState([]);
  const [hastTagData, setHastTagData] = useState([]);
  const [prodData, setProdData] = useState([]);
  const [tabId, setTabId] = useState(1);

  const page = 6;
  const [pageCurrent, setPageCurrent] = useState(1);
  const [allProdData, setAllProdData] = useState([]);
  const pageAll = prodData.length;
  const newAllData = [];

  useEffect(() => {
    // api refactored data
    newTab?.forEach((item) => {
      if (item?.Id === 1) {
        newThemData.push(item);
      }
      if (item?.Id >= 2 && item.Id <= 6) {
        newHastTagData.push(item);
      }
      if (item?.Id >= 7) {
        newProdData.push(item);
      }
    });

    setThemData(newThemData);
    setHastTagData(newHastTagData);
    setProdData(newProdData);
  }, [newTab]);

  useEffect(() => {
    const startPage = (pageCurrent - 1) * page;
    setAllProdData(prodData.slice(startPage, startPage + page));
  }, [prodData, pageCurrent]);

  // const renderChange = (pageCurrent) => {
  //   for (let i = (pageCurrent - 1) * page; i < pageCurrent * page && i < prodData.length; i++) {
  //     newAllData.push(prodData[i]);
  //   }
  //   setAllProdData(newAllData);
  // };

  return (
    <div className='c-activityBox'>
      <div className='c-activityBox__main'>
        <ToolBar
          newBlock={newBlock}
          newTab={newTab}
          setNewTab={setNewTab}
          tabId={tabId}
          setTabId={setTabId}
        />
        <div className='c-activityBox__them'>
          <div
            className='c-activityBox__editThem'
            style={{ backgroundColor: `${themData[0]?.Link?.Background}` }}
          >
            <div className='c-activityBox__info'>
              <div className='c-activityBox__tag'>
                <div className='c-activityBox__tagEdit'>{activityTag}</div>
              </div>
              <div className='c-activityBox__title'>{themData[0]?.Link?.Text2}</div>
              <div className='c-activityBox__hashtagBox'>
                <ul className='c-activityBox__hashtag'>
                  <HastTag hastTagData={hastTagData} getElementTypeUrl={getElementTypeUrl} />
                </ul>
              </div>
            </div>
            <div className='c-activityBox__theme'>
              <img
                src={`https://fs-a.ecimg.tw/${themData[0]?.Img?.Src}`}
                alt={themData[0]?.Img.Text}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='c-activityBox__product'>
        <div className='c-activityBox__info'>
          <div className='c-listInfo__info'>
            <div className='c-listInfo__wrapper'>
              <ul className='c-listInfo__productBox'>
                <ProductInfo
                  allProdData={allProdData}
                  getElementTypeUrl={getElementTypeUrl}
                  // renderChange={renderChange}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className='c-activityBox__page'>
          <Page
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
            pageAverage={Math.ceil(pageAll / page)}
            getElementTypeUrl={getElementTypeUrl}
            // renderChange={renderChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityBox;
