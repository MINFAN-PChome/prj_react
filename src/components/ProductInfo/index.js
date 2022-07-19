import React from 'react';
import './product.scss';

const ProductInfo = (props) => {
  const { prodData, renderElementTypeUrl } = props;

  return prodData.map((item, index) => {
    const { id, prodName, prodPrice, prodLink, prodImg, prodType, prodTypeSort } = item;
    console.log();
    return (
      <li className='c-activityBox__item' key={id}>
        <a
          className='c-activityBox__link'
          href={`${prodType === '' ? 'prodType' : renderElementTypeUrl(prodType)}` + prodLink}
        >
          <div className='c-productInfo'>
            <div className='c-productInfo__img'>
              <img src={'https://cs-a.ecimg.tw' + prodImg} alt={prodName} />
            </div>
            <div className='c-productInfo__title'>{prodName}</div>
            <div className='c-productInfo__price'>${prodPrice}</div>
          </div>
        </a>
      </li>
    );
  });
};

export default ProductInfo;
