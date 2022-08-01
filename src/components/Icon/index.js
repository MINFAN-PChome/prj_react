import React from 'react';
import './icon.scss';

const Icon = (props) => {
  const { style } = props;
  return <i className={style}></i>;
};

export default Icon;
