import React, { FC } from 'react';
import { Tabs } from 'antd';
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons';

import type { TabsProps } from 'antd';

import Lib from './ComponentLib';

const LeftPanel: FC = () => {
  const tabsItem: TabsProps['items'] = [
    {
      key: 'components',
      icon: <AppstoreAddOutlined />,
      label: '组件库',
      children: <Lib />,
    },
    {
      key: 'layers',
      icon: <BarsOutlined />,
      label: '图层',
      children: <div>图层</div>,
    },
  ];
  return <Tabs defaultActiveKey="components" items={tabsItem}></Tabs>;
};

export default LeftPanel;
