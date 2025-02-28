import React, { FC, useEffect } from 'react';
import { TitlePropsType } from './interface';
import { Form, Input } from 'antd';

const PropComponent: FC<TitlePropsType> = (props: TitlePropsType) => {
  const { name, prop } = props;
  const { text, level, isCenter } = prop;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ name, text, level, isCenter });
  }, [name, text, level, isCenter]);
  return (
    <Form layout="vertical" form={form} initialValues={{ name, text, level, isCenter }}>
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
