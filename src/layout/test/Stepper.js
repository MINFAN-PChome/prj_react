import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addButtonClick, reduceButtonClick } from './action';

const Stepper = () => {
  // const [count, isCount] = useState(1);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => {
    console.log(state);
  });
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '500px',
        margin: '50px auto',
      }}
    >
      <button
        onClick={() => {
          dispatch(addButtonClick());
        }}
      >
        增加
      </button>
      <span>{count}</span>
      <button
        // onClick={() => {
        //   isCount((prev) => prev - 1);
        // }}
        onClick={() => {
          dispatch(reduceButtonClick());
        }}
      >
        減少
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addButtonClick: () => dispatch({ type: 'ADD_BUTTON_CLICK' }),
  };
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
