import React, { FC } from 'react';
import { Space, Button, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteComponent,
} from '@/store/questionDetail/componentState';

import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent, copiedComponent } = useGetComponentInfo();
  const isLocked = selectedComponent || {};
  function handleDelete() {
    dispatch(removeSelectedComponent());
  }

  // 组件显隐藏
  function handleHide() {
    dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true }));
  }

  // 组件显隐藏
  function handleLock() {
    dispatch(toggleComponentLocked({ fe_id: selectedId }));
  }

  // 复制
  function handleCopy() {
    dispatch(copySelectedComponent());
  }

  // 粘贴
  function handlePaste() {
    dispatch(pasteComponent());
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button icon={<DeleteOutlined />} shape="circle" onClick={handleDelete}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button icon={<EyeInvisibleOutlined />} shape="circle" onClick={handleHide}></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          icon={<LockOutlined />}
          shape="circle"
          onClick={handleLock}
          type={isLocked ? 'default' : 'primary'}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button icon={<CopyOutlined />} shape="circle" onClick={handleCopy}></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          icon={<BlockOutlined />}
          shape="circle"
          onClick={handlePaste}
          disabled={!copiedComponent}
        ></Button>
      </Tooltip>
    </Space>
  );
};
export default EditToolbar;
