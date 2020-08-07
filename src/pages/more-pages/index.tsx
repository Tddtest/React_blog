/***
 * @auth: dmx
 * @time: 2020/8/1
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { memo, useState, useCallback } from 'react';
import { Menu } from 'antd';
import {
  // 右键菜单相关
  ReloadOutlined,
  SyncOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  CloseSquareOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
} from '@ant-design/icons';
import ContextMenu from '../../components/context-menu';

interface IProps {

}
const { Item } = Menu;
const MorePages: React.FC<IProps> = (props) => {

  // 右键菜单显示
  const [visible, setVisible] = useState(false);

  // 右键菜单显示的位置 和要显示的内容
  const [contextMenu, setContextMenu] = useState<{
    contextEvent: {
      clientX: string | number;
      clientY: string | number;
    };
    contextChild: React.ReactNode;
  }>({
    contextEvent: {
      clientX: '',
      clientY: '',
    },
    contextChild: null,
  });

  // 多页签导航节点
  const menuNode = () => {
    return (
      <Menu
        selectable={false}
        onClick={(opt) => console.log(opt)}
      >
        <Item key="refresh">
          <ReloadOutlined />
          刷新
        </Item>
        <Item key="refreshAll">
          <SyncOutlined />
          刷新全部
        </Item>
        <Item disabled={false} key="own">
          <CloseOutlined  />
          关闭
        </Item>
        <Item disabled={false } key="others">
          <CloseCircleOutlined  />
          关闭其他
        </Item>
        <Item disabled={false} key="all">
          <CloseSquareOutlined  />
          关闭所有
        </Item>
        <Item disabled={false} key="left">
          <VerticalLeftOutlined />
          关闭左侧
        </Item>
        <Item disabled={false} key="right">
          <VerticalRightOutlined />
          关闭右侧
        </Item>
      </Menu>
    )
  }

  // 子组件控制显示
  const onChange = useCallback((bool: boolean) => {
    setVisible(bool);
  }, []);

  // 右键单击事件
  const handleRightClick = useCallback((e: any) => {
    e.preventDefault();
    setVisible(true);
    setContextMenu({
      contextEvent: {
        clientX: e.clientX,
        clientY: e.clientY,
      },
      contextChild: menuNode(),
    });
  }, []);

  return (
    <div className="more-page-menu">
      <ContextMenu
        visible={visible}
        onChange={onChange}
        contextMenu={{
          contextEvent: contextMenu.contextEvent,
          contextChild: contextMenu.contextChild,
        }}
      />
      <Menu
        mode="horizontal"
      >
        <Menu.Item onContextMenu={(e) => handleRightClick(e)} key="mail" >
          测试一
        </Menu.Item>
        <Menu.Item key="app" >
          测试二
        </Menu.Item>
        <Menu.Item key="setting:1">测试三</Menu.Item>
        <Menu.Item key="setting:2">测试四</Menu.Item>
        <Menu.Item key="setting:3">测试五</Menu.Item>
        <Menu.Item key="setting:4">测试六</Menu.Item>
        <Menu.Item key="alipay">
          测试七
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default memo(MorePages);
