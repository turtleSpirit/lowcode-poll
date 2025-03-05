import React, { FC, useEffect } from 'react';
import { RadioPropsType, OptionType, FromValueRadio } from './interface';
import { Form, Input, Select, Checkbox, Button, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

const PropComponent: FC<RadioPropsType> = (props: RadioPropsType) => {
  const { name, prop, onChange, disabled } = props;
  const { title, isVertical, value, options = [] } = prop;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ name, title, isVertical, value, options });
  }, [name, title, isVertical, value, options]);

  function handleChange() {
    if (onChange) {
      const fromData = form.getFieldsValue() as FromValueRadio;
      if (fromData.options) {
        // 需要清除 text undefined 的选项
        fromData.options = fromData.options.filter(opt => {
          return opt.text !== null || opt.text !== undefined;
        });
      }
      const { options = [] } = fromData;
      options.forEach(option => {
        if (!option.value) option.value = nanoid(5);
      });

      onChange(fromData);
    }
  }
  return (
    <Form layout="vertical" form={form} onValuesChange={handleChange} disabled={disabled}>
      <Form.Item label="图层名" name="name">
        <Input />
      </Form.Item>
      <Form.Item
        label="标题内容"
        name="title"
        rules={[{ required: true, message: '请输入标题内容' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="选项">
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ name, key }, index) => {
                return (
                  <Space key={key} align="baseline">
                    {/*[name, 'text'], 指的是修改哪一项的text*/}
                    <Form.Item
                      name={[name, 'text']}
                      rules={[
                        { required: true, message: '请输入选项内容' },
                        {
                          validator: (_, text) => {
                            const { options = [] } = form.getFieldsValue();
                            let num = 0;
                            options.forEach((opt: OptionType) => {
                              if (opt.text === text) {
                                num++;
                              }
                            });
                            if (num === 1) return Promise.resolve();
                            return Promise.reject(new Error('选项内容重复'));
                          },
                        },
                      ]}
                    >
                      <Input placeholder="请输入选项内容" />
                    </Form.Item>
                    {/*当前选项的删除按钮*/}
                    {index > 1 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="link"
                  onClick={() => add({ text: '', value: '' })}
                  icon={<PlusOutlined />}
                  block
                >
                  添加选型
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name="value" label="默认选中">
        <Select
          value={value}
          options={options.map(({ text, value }) => ({ label: text, value }))}
        ></Select>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
