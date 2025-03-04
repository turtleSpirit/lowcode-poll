import React, { FC, useEffect } from 'react';
import { InfoPropsType } from './interface';
import { Form, Input } from 'antd';

const { TextArea } = Input;
const PropComponent: FC<InfoPropsType> = (props: InfoPropsType) => {
  const { name, prop, onChange, disabled } = props;
  const { title, desc } = prop;
  const [form] = Form.useForm();
  function handleChange() {
    if (onChange) {
      const data = form.getFieldsValue();
      onChange(data);
    }
  }
  useEffect(() => {
    form.setFieldsValue({ name, title, desc });
  }, [name, title, desc]);
  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange} disabled={disabled}>
      <Form.Item label="图层名" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
