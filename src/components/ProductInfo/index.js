import React from 'react';
import './product.scss';

const ProductInfo = (props) => {
  const { id, prodName, prodPrice, prodLink, prodImg } = props;
  console.log(prodData);

  return (
    <li className='c-activityBox__item' key={id}>
      djfkdjfkdjfkdlfjdlkjfkld
      <a className='c-activityBox__link' href={prodLink}>
        <div className='c-productInfo'>
          <div className='c-productInfo__img'>
            <img src={prodImg} alt={prodName} />
          </div>
          <div className='c-productInfo__title'>{prodName}</div>
          <div className='c-productInfo__price'>${prodPrice}</div>
        </div>
      </a>
    </li>
  );
};

export default ProductInfo;
