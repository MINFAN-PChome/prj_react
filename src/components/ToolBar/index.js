import React, { useState } from 'react';
import './toolBar.scss';

const ToolBar = (them) => {
  const { newBlock, newTab, setNewTab } = them;
  const isActive = useState(false);
  // console.log(newBlock);
  // 回傳
  const handleToolBarClick = (index) => {
    setNewTab(newBlock[index]);
  };

  return (
    <div className='c-toolBar'>
      <ul className='c-toolBarGroup'>
        {newBlock?.map((item, index) => (
          <li
            className={`c-toolBarItem ${
              isActive && item?.Nodes[0] === newTab?.Nodes[0] ? 'is-active' : ''
            }`}
            // handleToolBarClick={handleToolBarClick(e)}
            onClick={() => {
              if (index === 0) return;
              handleToolBarClick(index);
            }}
            key={`${item?.Id}_${index}`}
          >
            <a href='' className='c-toolBarLink'>
              {item?.Nodes[0]?.Link?.Text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToolBar;
