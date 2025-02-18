import React, { FC, useEffect } from 'react';
import { Typography, Space, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { REGISTER_PATHNAME } from '@/router/config';
import styles from '@/assets/styles/pages/Register.module.scss';

const { Title } = Typography;

const USERNAME_KEY = 'USERNAME';
const PASSWORD_KEY = 'PASSWORD';

const Login: FC = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    console.log(username, password);
    form.setFieldsValue({ username, password }); // 回填表单数据
  }, []); // 空数组，表示等组件渲染完成后执行

  function rememberUser(username: string, password: string) {
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(PASSWORD_KEY, password);
  }

  function getUserInfoFromStorage() {
    const username = localStorage.getItem(USERNAME_KEY);
    const password = localStorage.getItem(PASSWORD_KEY);
    return { username, password };
  }

  function deleteUserFromStorage() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(PASSWORD_KEY);
  }
  const onFinished = (value: any) => {
    const { remember, username, password } = value;
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinished}
          initialValues={{ remember: true }}
          form={form}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20, message: '字符长度在5-20之间' },
              { pattern: /^\w+$/, message: '只能是字母数字下划线' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 18 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
