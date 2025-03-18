import React, { FC } from 'react';
import { Space, Button, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
  UpOutlined,
  DownOutlined,
  UndoOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import {
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteComponent,
  moveComponent,
} from '@/store/questionDetail/componentState';

import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const EditToolbar: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, selectedComponent, copiedComponent, componentList } = useGetComponentInfo();
  const isLocked = selectedComponent || {};

  const length = componentList.length;
  const selectIdIndex = componentList.findIndex(c => c.fe_id === selectedId);
  const isFirst = selectIdIndex <= 0;
  const isLast = selectIdIndex >= length - 1;
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
  //上移
  function moveUp() {
    if (isFirst) return;
    dispatch(moveComponent({ oldIndex: selectIdIndex, newIndex: selectIdIndex - 1 }));
  }
  // 下移
  function moveDown() {
    if (isLast) return;
    dispatch(moveComponent({ oldIndex: selectIdIndex, newIndex: selectIdIndex + 1 }));
  }
  // 撤销
  function undo() {
    dispatch(UndoActionCreators.undo());
  }
  function redo() {
    dispatch(UndoActionCreators.redo());
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
      <Tooltip title="上移">
        <Button icon={<UpOutlined />} shape="circle" onClick={moveUp} disabled={isFirst}></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button
          icon={<DownOutlined />}
          shape="circle"
          onClick={moveDown}
          disabled={isLast}
        ></Button>
      </Tooltip>
      <Tooltip title="撤销">
        <Button icon={<UndoOutlined />} shape="circle" onClick={undo}></Button>
      </Tooltip>
      <Tooltip title="重做">
        <Button icon={<RedoOutlined />} shape="circle" onClick={redo}></Button>
      </Tooltip>
    </Space>
  );
};
export default EditToolbar;
