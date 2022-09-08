import React from 'react';
import PropTypes from 'prop-types';
import './hastTag.scss';

const HastTag = (props) => {
  const { hastTagData, getElementTypeUrl } = props;
  return hastTagData.map((tag) => {
    const { Id, Link, ExtraData } = tag;
    return (
      <li className='c-activityBox__item' key={Id}>
        <a
          href={
            `${Link.Url === '' ? 'prodType' : getElementTypeUrl(ExtraData.ElementType)}` + Link.Url
          }
          className='c-activityBox__link'
        >
          #{Link.Text}
        </a>
      </li>
    );
  });
};
HastTag.propTypes = {
  hastTagData: PropTypes.array.isRequired,
  getElementTypeUrl: PropTypes.func.isRequired,
};

export default HastTag;
