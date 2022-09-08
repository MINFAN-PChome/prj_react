import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import Button from '../../Button';
import Icon from '../../Icon';
import './page.scss';
const Page = (props) => {
  const { pageCurrent, setPageCurrent, pageAverage } = props;
  const [disabledPage, setDisabledPage] = useState(true);
  const atPagePre = (pageCurrent) => {
    if (pageCurrent <= 1) {
      pageCurrent = 1;
    }
    setPageCurrent(--pageCurrent);
  };
  const atPageNext = (pageCurrent) => {
    if (pageCurrent > pageAverage) {
      pageCurrent = pageAverage;
    }
    setPageCurrent(++pageCurrent);
  };
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
          atClick={() => atPagePre(pageCurrent)}
        />
      );
    }
  };
  const renderBtnNext = () => {
    if (pageCurrent === pageAverage) {
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
          atClick={() => atPageNext(pageCurrent)}
        />
      );
    }
  };

  return (
    <div className='o-page'>
      <div className='o-page__btn o-page__btn--prev'>{renderBtnPrev()}</div>
      <div className='o-page__pagination'>
        <span className='o-page__pageValue'>{pageCurrent}</span>/
        <span className='o-page__pageAverage'>{pageAverage}</span>
        {/* {newAllData.map((item, index) => {
          const { Id, Link, Img, ExtraData } = item;
          return (
            <span className='o-page__pageIndex' key={Id}>
              {index}
            </span>
          );
        })} */}
      </div>
      <div className='o-page__btn o-page__btn--next'>{renderBtnNext()}</div>
    </div>
  );
};
// Page.propTypes = {
//   pageCurrent: PropTypes.number,
//   setPageCurrent: PropTypes.func.isRequired,
//   pageAverage: PropTypes.func.isRequired,
// }

// Page.defaultProps = {
//   pageCurrent: 1,
//   setPageCurrent: PropTypes.func.isRequired,
//   pageAverage: PropTypes.func.isRequired,
// }

export default Page;
