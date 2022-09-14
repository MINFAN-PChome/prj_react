import React, { useState } from 'react';
import './toolBar.scss';

const ToolBar = (them) => {
  const { newBlock, newTab, setNewTab, setTabId, tabId } = them;
  const isActive = useState(false);

  // 回傳
  const handleToolBarClick = (newTab, tabId) => {
    setNewTab(newTab.Nodes);
    setTabId(tabId);
  };

  return (
    <div className='c-toolBar'>
      <ul className='c-toolBarGroup'>
        {newBlock?.map((item, index) => (
          <li
            className={`c-toolBarItem ${isActive && item?.BlockId === tabId ? 'is-active' : ''}`}
            onClick={() =>
              // if (index === 0) return;
              handleToolBarClick(item, item.BlockId)
            }
            key={`${item?.Id}_${index}`}
          >
            <a href='#' className='c-toolBarLink'>
              {item?.Nodes[0]?.Link?.Text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToolBar;
