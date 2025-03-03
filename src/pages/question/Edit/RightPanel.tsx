import React, { FC } from 'react';
import { Tabs } from 'antd';
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import ComponentProp from './ComponentProp';

const RightPanel: FC = () => {
  const tabItems = [
    {
      label: '属性',
      key: '1',
      icon: <FileTextOutlined />,
      children: <ComponentProp />,
    },
    {
      label: '页面设置',
      key: '2',
      icon: <SettingOutlined />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={tabItems}></Tabs>;
};
export default RightPanel;
