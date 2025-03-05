import React, { FC, useEffect } from 'react';
import { TextareaPropsType } from './interface';
import { Form, Input } from 'antd';

const PropComponent: FC<TextareaPropsType> = (props: TextareaPropsType) => {
  const { name, prop, onChange, disabled } = props;
  const { title, placeholder, value } = prop;
  const [form] = Form.useForm();
  function handleChange() {
    if (onChange) {
      const data = form.getFieldsValue();
      onChange(data);
    }
  }
  useEffect(() => {
    form.setFieldsValue({ name, title, placeholder, value });
  }, [name, title, placeholder]);
  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange} disabled={disabled}>
      <Form.Item label="图层名" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="默认值" name="value">
        <Input />
      </Form.Item>
      <Form.Item label="PlaceHolder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
