import React, { FC, useEffect } from 'react';
import { CheckboxPropsType, OptionType, FromValueCheckbox } from './interface';
import { Form, Input, Checkbox, Button, Space } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

const PropComponent: FC<CheckboxPropsType> = (props: CheckboxPropsType) => {
  const { name, prop, onChange, disabled } = props;
  const { title, isVertical, list = [] } = prop;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ name, title, isVertical, list });
  }, [name, title, isVertical, list]);

  function handleChange() {
    if (onChange) {
      const fromData = form.getFieldsValue() as FromValueCheckbox;
      if (fromData.list) {
        // 需要清除 text undefined 的选项
        fromData.list = fromData.list.filter(opt => {
          return opt.text !== null || opt.text !== undefined;
        });
      }
      const { list = [] } = fromData;
      list.forEach(option => {
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
        <Form.List name="list">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ name, key }, index) => {
                return (
                  <Space key={key} align="baseline">
                    {/*[name, 'text'], 指的是修改哪一项的text*/}
                    <Form.Item name={[name, 'checked']} valuePropName="checked">
                      <Checkbox />
                    </Form.Item>
                    <Form.Item
                      name={[name, 'text']}
                      rules={[
                        { required: true, message: '请输入选项内容' },
                        {
                          validator: (_, text) => {
                            const { list = [] } = form.getFieldsValue();
                            let num = 0;
                            list.forEach((opt: OptionType) => {
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
                    {index > 0 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                );
              })}
              <Button
                type="link"
                onClick={() => add({ text: '', value: '', checked: false })}
                icon={<PlusOutlined />}
                block
              >
                添加选型
              </Button>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
