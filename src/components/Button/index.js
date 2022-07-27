import React from 'react';
import './button.scss';

const Button = (props) => {
  const { style, text, startIcon, endIcon, atClick } = props;
  return (
    <button className={style} onClick={atClick} type='button'>
      {startIcon}
      {text}
      {endIcon}
    </button>
  );
};

export default Button;
