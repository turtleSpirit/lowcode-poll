import React, { FC } from 'react';
import { Space, Button, Tooltip } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  removeSelectedComponent,
  changeComponentHidden,
} from '@/store/questionDetail/componentState';

import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId } = useGetComponentInfo();
  function handleDelete() {
    dispatch(removeSelectedComponent());
  }

  // 组件显隐藏
  function handleHide() {
    dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: false }));
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button icon={<DeleteOutlined />} shape="circle" onClick={handleDelete}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button icon={<EyeInvisibleOutlined />} shape="circle" onClick={handleHide}></Button>
      </Tooltip>
    </Space>
  );
};
export default EditToolbar;
