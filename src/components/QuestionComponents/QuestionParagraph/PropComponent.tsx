import React, { FC, useEffect } from 'react';
import { ParaGraphPropsType } from './interface';
import { Form, Input, Checkbox } from 'antd';

const { TextArea } = Input;
const PropComponent: FC<ParaGraphPropsType> = (props: ParaGraphPropsType) => {
  const { name, prop, onChange, disabled } = props;
  const { text, isCenter } = prop;
  const [form] = Form.useForm();
  function handleChange() {
    if (onChange) {
      const data = form.getFieldsValue();
      onChange(data);
    }
  }
  useEffect(() => {
    form.setFieldsValue({ name, text, isCenter });
  }, [name, text, isCenter]);
  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange} disabled={disabled}>
      <Form.Item label="图层名" name="name">
        <Input />
      </Form.Item>
      <Form.Item
        label="段落内容"
        name="text"
        rules={[{ required: true, message: '请输入段落内容' }]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>是否居中</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
