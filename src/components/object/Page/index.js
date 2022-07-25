import React from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import './page.scss';

const Page = (props) => {
  const { pageCurrent } = props;
  const atPagePre = () => {
    pageCurrent--;
    // if (pageCurrent < 1) {
    //   pageCurrent = 1;
    // }
    console.log(pageCurrent);

    renderChange(pageCurrent);
  };
  const atPageNext = () => {
    pageCurrent++;
    // if (pageCurrent >= pageAverage()) {
    //   renderChange(pageCurrent);
    // }
    console.log(pageCurrent);
  };
  console.log(pageCurrent);

  const { onPagePre, onPageNext } = props;
  return (
    <div className='o-page'>
      <div className='o-page__btn'>
        <Button
          style='o-btn o-btn--circle o-btn--prev'
          startIcon={<Icon style='o-icon o-icon--prev' />}
          onClick={atPagePre}
        ></Button>
      </div>
      <div className='o-page__pagination'>1/3</div>
      <div className='o-page__btn'>
        <Button
          style='o-btn o-btn--circle o-btn--next'
          startIcon={<Icon style='o-icon o-icon--next' />}
          onClick={atPageNext}
        ></Button>
      </div>
    </div>
  );
};

export default Page;
