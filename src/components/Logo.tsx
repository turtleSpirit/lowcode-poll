import React, { FC } from 'react';
import { Space, Typography } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from '@/assets/styles/components/Logo.module.scss';

const { Title } = Typography;

const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space className={styles.spaceHeight}>
          <Title>
            <FormOutlined></FormOutlined>
          </Title>
          <Title>问卷</Title>
        </Space>
      </Link>
    </div>
  );
};

export default Logo;
