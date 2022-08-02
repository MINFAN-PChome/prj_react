import React, { useState } from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import './page.scss';
const Page = (props) => {
  const { pageCurrent, onCallPre, onCallNext, pageAverage, renderSwiper } = props;
  const [disabledPage, setDisabledPage] = useState(true);
  const atPagePre = () => {
    onCallPre(pageCurrent);
  };
  const atPageNext = () => {
    onCallNext(pageCurrent);
  };
  console.log(pageCurrent);
  console.log(pageAverage());
  const renderBtnPrev = () => {
    if (pageCurrent === 1) {
      return (
        <Button
          style={`o-btn o-btn--circle o-btn--prev ${disabledPage && 'is-disabled'}`}
          startIcon={<Icon style='o-icon o-icon--prev' />}
        />
      );
    } else {
      return (
        <Button
          style={`o-btn o-btn--circle o-btn--prev`}
          startIcon={<Icon style='o-icon o-icon--prev' />}
          atClick={atPagePre}
        />
      );
    }
  };
  const renderBtnNext = () => {
    if (pageCurrent === pageAverage()) {
      return (
        <Button
          style={`o-btn o-btn--circle o-btn--next ${disabledPage && 'is-disabled'}`}
          startIcon={<Icon style='o-icon o-icon--next' />}
        />
      );
    } else {
      return (
        <Button
          style='o-btn o-btn--circle o-btn--next'
          startIcon={<Icon style='o-icon o-icon--next' />}
          atClick={atPageNext}
        />
      );
    }
  };

  return (
    <div className='o-page'>
      <div className='o-page__btn o-page__btn--prev'>{renderBtnPrev()}</div>
      <div className='o-page__pagination'>
        <span className='o-page__pageValue'>{pageCurrent}</span>/
        <span className='o-page__pageAverage'>{pageAverage()}</span>
      </div>
      <div className='o-page__btn o-page__btn--next'>{renderBtnNext()}</div>
    </div>
  );
};

export default Page;
