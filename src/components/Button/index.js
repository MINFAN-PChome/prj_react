import React from 'react';
import './button.scss';

const Button = (props) => {
  const { style, text, startIcon, endIcon } = props;
  return (
    <button className={style} type='button'>
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default Button;
