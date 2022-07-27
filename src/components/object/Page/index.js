import React from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import './page.scss';
const Page = (props) => {
  const { pageCurrent, onCallPre, onCallNext, pageAverage } = props;

  const atPagePre = () => {
    onCallPre(pageCurrent)
  };
  const atPageNext = () => {
    onCallNext(pageCurrent)
  };

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
