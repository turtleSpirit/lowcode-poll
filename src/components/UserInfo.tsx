import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_PATHNAME } from '@/router/config';

const UserInfo: FC = () => {
  return (
    <>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </>
  );
};

export default UserInfo;
