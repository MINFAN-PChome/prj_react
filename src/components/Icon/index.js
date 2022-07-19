import React from 'react';
import './Icon.scss';

const Icon = (props) => {
  const { style } = props;
  return <i className={style} type='Icon'></i>;
};

export default Icon;
