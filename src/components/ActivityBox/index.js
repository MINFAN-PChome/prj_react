import React from 'react';
import ProductInfo from '../ProductInfo';
import './activityBox.scss';

function Hashtag(props) {
  const { value } = props;
  return (
    <li className='o-hashtag__item'>
        <span className='o-hashtag__tag'>{value}</span>
      </li>
  );
}

function ProductItem(props){
  const{productData} = props;
  return(
    <>
    {productData.map((prodData) => (
      <a className="c-activityBox__item">
            <ProductInfo
              key={prodData.id}
              img={prodData.images}
              title={prodData.title}
              price={prodData.price}
            />
    </a>
    ))}</>
  )
}
function ActivityBox(props) {
  const { tag, title, hashtag, bgimg, productData } = props;
  return (
    <div className='c-activityBox'>
      <div className='c-activityBox__main'>
        <div className='c-activity'>
          <div className='c-activity__info'>
            <div className='c-activity__tag'>
              <div className='o-tag'>{tag}</div>
            </div>
            <div className='c-activity__title'>{title}</div>
            <div className='c-activity__hashtag'>
            <ul className='o-hashtag'>
              {hashtag.map((tagData) => (
                <Hashtag key={tagData.toString()} value={tagData} />
                ))}
              </ul>

            </div>
          </div>
          <div className="c-activity__theme">
            <img src={bgimg} alt="" />
          </div>
        </div>
      </div>
      <div className='c-activityBox__product'>
        <div className='c-activityBox__info'>
          <ProductItem productData={productData} />
        </div>
        <div className="c-activityBox__page">
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
}

export default ActivityBox;
