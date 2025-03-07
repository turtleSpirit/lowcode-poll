import React, { FC, useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import ComponentProp from './ComponentProp';
import PageSetting from './PageSetting';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';

enum TAB_KEY {
  PROP_KEY = 'prop',
  SETTING_KEY = 'setting',
}
const RightPanel: FC = () => {
  const [activeKey, setActiveKey] = useState<string>(TAB_KEY.PROP_KEY);
  const { selectedId } = useGetComponentInfo();
  useEffect(() => {
    if (selectedId) {
      setActiveKey(TAB_KEY.PROP_KEY);
    } else {
      setActiveKey(TAB_KEY.SETTING_KEY); // 未选中时，默认切换到设置面板。
    }
  }, [selectedId]);
  const tabItems = [
    {
      label: '属性',
      key: TAB_KEY.PROP_KEY,
      icon: <FileTextOutlined />,
      children: <ComponentProp />,
    },
    {
      label: '页面设置',
      key: TAB_KEY.SETTING_KEY,
      icon: <SettingOutlined />,
      children: <PageSetting />,
    },
  ];
  return <Tabs activeKey={activeKey} items={tabItems} onChange={key => setActiveKey(key)}></Tabs>;
};
export default RightPanel;
