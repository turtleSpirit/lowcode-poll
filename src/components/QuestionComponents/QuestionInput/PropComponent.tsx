import React, { FC, useEffect } from 'react';
import { InputPropsType } from './interface';
import { Form, Input } from 'antd';

const PropComponent: FC<InputPropsType> = (props: InputPropsType) => {
  const { name, prop } = props;
  const { title, placeholder } = prop;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ name, title, placeholder });
  }, [name, title, placeholder]);
  return (
    <Form layout="vertical" form={form} initialValues={{ name, title, placeholder }}>
      <Form.Item label="图层名" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="PlaceHolder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
