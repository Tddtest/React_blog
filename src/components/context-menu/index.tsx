/***
 * @auth: dmx
 * @time: 2020/8/1
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {
  memo,
  useEffect,
  useCallback,
} from 'react';

import './index.less';


export interface IContextMenu {
  contextEvent: {
    clientX: string | number;
    clientY: string | number;
  };
  contextChild: React.ReactNode;
}
interface IProps {
  // 是否显示菜单
  visible: boolean
  // change事件
  onChange: (bool: boolean) => void;
  // 位置信息以及显示的子元素
  contextMenu: IContextMenu;
}

const ContextMenu: React.FC<IProps> = (props) => {


  const {
    visible,
    onChange,
    contextMenu,
  } = props;

  // 点击空白处，隐藏菜单
  const hideRightContent = useCallback(() => onChange && onChange(false), [onChange]);

  useEffect(() => {

    // 添加事件
    document.addEventListener('click', hideRightContent);

    return () => {
      document.removeEventListener('click', hideRightContent);
    }
  }, [hideRightContent, onChange]);

  return (
    <div
      className="context-menu"
      style={{
        display: visible ? 'block' : 'none',
      }}
    >
      <div
        className='content'
        style={{
          top: contextMenu.contextEvent.clientY,
          left: contextMenu.contextEvent.clientX,
        }}
      >
        {
          contextMenu.contextChild
        }
      </div>
    </div>
  );
};

export default memo(ContextMenu);
