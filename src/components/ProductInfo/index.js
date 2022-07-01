import React from 'react';
import './product.scss';


function ProductInfo(props) {
  const { img, title, price } = props;
  return (
        <div className='c-productInfo'>
          <div className='c-productInfo__img'>
            <img src={img} alt='' />
          </div>
          <div className='c-productInfo__title'>{title}</div>
          <div className='c-productInfo__price'>${price}</div>
        </div>
  );
}

export default ProductInfo;
