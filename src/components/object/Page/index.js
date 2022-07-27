import React from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import './page.scss';

const Page = (props) => {
  const { pageCurrent, pageAverage, renderSwiper } = props;
  const atPagePre = () => {
    pageCurrent--;
    if (pageCurrent < 1) {
      pageCurrent = 1;
    }
    renderSwiper(pageCurrent);
    console.log(pageCurrent);
  };
  const atPageNext = () => {
    pageCurrent++;
    if (pageCurrent >= pageAverage()) {
    }
    renderSwiper(pageCurrent);
    console.log(pageCurrent);
  };
  console.log(pageCurrent);

  return (
    <div className='o-page'>
      <div className='o-page__btn'>
        <Button
          style='o-btn o-btn--circle o-btn--prev'
          startIcon={<Icon style='o-icon o-icon--prev' />}
          atClick={atPagePre}
        />
      </div>
      <div className='o-page__pagination'>
        {pageCurrent}/{pageAverage()}
      </div>
      <div className='o-page__btn'>
        <Button
          style='o-btn o-btn--circle o-btn--next'
          startIcon={<Icon style='o-icon o-icon--next' />}
          atClick={atPageNext}
        />
      </div>
    </div>
  );
};

export default Page;
