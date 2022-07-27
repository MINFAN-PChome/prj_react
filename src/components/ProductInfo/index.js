import React from 'react';
import './product.scss';

const ProductInfo = (props) => {
  const { prodData, renderElementTypeUrl } = props;

  return prodData.map((item) => {
    const { Id, Link, Img, ExtraData } = item;
    return (
      <li className='c-activityBox__item' key={Id}>
        <a
          className='c-activityBox__link'
          href={
            `${
              ExtraData.ElementType === ''
                ? 'prodType'
                : renderElementTypeUrl(ExtraData.ElementType)
            }` + Link.Url
          }
        >
          <div className='c-productInfo'>
            <div className='c-productInfo__img'>
              <img src={'https://cs-a.ecimg.tw' + `${Img.Src}`} alt={Link.Text} />
            </div>
            <div className='c-productInfo__title'>{Link.Text}</div>
            <div className='c-productInfo__price'>${Link.Text1}</div>
          </div>
        </a>
      </li>
    );
  });
};

export default ProductInfo;
