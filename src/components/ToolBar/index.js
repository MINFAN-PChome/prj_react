import React, { useState } from 'react';
import './toolBar.scss';

const ToolBar = (them) => {
  const { newBlock, newTab, setNewTab } = them;
  const isActive = useState(false);
  // console.log(newBlock);
  // 回傳
  const handleToolBarClick = (e) => {
    let tab = newBlock.find((data) => data?.Nodes[0]?.Link.Text === e.target.innerHTML);
    setNewTab(tab);
    // console.log(e.target.innerHTML);
  };

  return (
    <div className='c-toolBar'>
      <ul className='c-toolBarGroup'>
        {newBlock?.map((data) =>
          data?.Nodes?.map((item, index) => {
            if (item.Id === 1) {
              return (
                <li
                  className={`c-toolBarItem ${
                    isActive && item?.Link.Text === newTab?.Nodes[0]?.Link?.Text ? 'is-active' : ''
                  }`}
                  // handleToolBarClick={handleToolBarClick(e)}
                  onClick={(e) => handleToolBarClick(e)}
                  key={`${item?.Id}_${index}`}
                >
                  <a href='' className='c-toolBarLink'>
                    {item?.Link?.Text}
                  </a>
                </li>
              );
            }
          })
        )}
      </ul>
    </div>
  );
};
export default ToolBar;
