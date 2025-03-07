import React, { ChangeEvent, FC, useState, useRef, useEffect } from 'react';
import styles from '@/assets/styles/pages/question/EditHeader.module.scss';
import { Button, Typography, Space, Input } from 'antd';
import { LeftOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import useGetPageInfo from '@/hooks/useGetPageInfo';
import { useDispatch } from 'react-redux';
import { changePageTitle } from '@/store/pageInfoReducer';

import EditToolbar from './EditToolBar';

import type { InputRef } from 'antd';

const { Title } = Typography;

// 显示和修改标题
const TitleElem: FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<InputRef>(null);
  const { title } = useGetPageInfo();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newTitle = e.target.value;
    dispatch(changePageTitle(newTitle));
  }
  function goEditTitle() {
    setIsEdit(true);
  }
  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus(); // 使input获取焦点
    }
  }, [isEdit]);
  if (isEdit) {
    return (
      <Input
        ref={inputRef}
        value={title}
        onChange={handleChange}
        onPressEnter={() => setIsEdit(false)}
        onBlur={() => setIsEdit(false)}
      />
    );
  }
  return (
    <Space>
      <Title>{title}</Title>
      <Button type="text" icon={<EditOutlined />} onClick={goEditTitle}></Button>
    </Space>
  );
};

// 编辑器头部
const EditHeader: FC = () => {
  const nav = useNavigate();

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <TitleElem />
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default EditHeader;
