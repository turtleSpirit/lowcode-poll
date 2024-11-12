import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './MainLayout.module.scss';

import Logo from '@/components/Logo';

const { Header, Content, Footer } = Layout;
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <Logo></Logo>
      </Header>
      <Layout className={styles.main}>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>MainLayout footer</Footer>
    </Layout>
  );
};

export default MainLayout;
