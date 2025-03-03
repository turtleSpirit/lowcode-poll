import React, { FC, useEffect } from 'react';
import { TitlePropsType } from './interface';
import { Form, Input, Select, Checkbox } from 'antd';
import { ChangeFromValue } from '@/components/QuestionComponents';

const PropComponent: FC<TitlePropsType> = (props: TitlePropsType) => {
  const { name, prop, onChange } = props;
  const { text, level, isCenter } = prop;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ name, text, level, isCenter });
  }, [name, text, level, isCenter]);

  function handleChange() {
    if (onChange) {
      const fromData = form.getFieldsValue() as ChangeFromValue;
      console.log('%c打印: fromData %o', 'color: red ;', fromData);

      onChange(fromData);
    }
  }
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ name, text, level, isCenter }}
      onValuesChange={handleChange}
    >
      <Form.Item label="图层名" name="name">
        <Input />
      </Form.Item>
      <Form.Item
        label="标题内容"
        name="text"
        rules={[{ required: true, message: '请输入标题内容' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="层级" name="level">
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
