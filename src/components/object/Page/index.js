import React from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import './page.scss';

const Page = () => {
  // const renderPage = (props) => {
  //   const { prodData } = props;
  //   const pageStemp = 6;
  //   const pageAverage = Math.ceil(prodData / pageStemp);
  // };

  return (
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
      </div>
    </div>
  );
};

export default Page;
