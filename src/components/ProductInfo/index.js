import React from 'react';
import PropTypes from 'prop-types';

import './product.scss';

const ProductInfo = (props) => {
  const { allProdData, getElementTypeUrl } = props;

  return allProdData.map((item) => {
    const { Id, Link, Img, ExtraData } = item;
    return (
      <li className='c-activityBox__item' key={Id}>
        <a
          className='c-activityBox__link'
          href={
            `${
              ExtraData.ElementType === '' ? 'prodType' : getElementTypeUrl(ExtraData.ElementType)
            }` + Link.Url
          }
        >
          <div className='c-productInfo'>
            <div className='c-productInfo__img'>
              <img src={`https://cs-a.ecimg.tw${Img.Src}`} alt={Link.Text} />
            </div>
            <div className='c-productInfo__title'>{Link.Text}</div>
            <div className='c-productInfo__price'>${Link.Text1}</div>
          </div>
        </a>
      </li>
    );
  });
};
ProductInfo.propTypes = {
  allProdData: PropTypes.array.isRequired,
  getElementTypeUrl: PropTypes.func.isRequired,
};

export default ProductInfo;
