import React, { FC, useEffect } from 'react';
import useGetPageInfo from '@/hooks/useGetPageInfo';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { resetPageInfo } from '@/store/pageInfoReducer';

const { TextArea } = Input;
const PageSetting: FC = () => {
  const dispatch = useDispatch();
  const pageInfo = useGetPageInfo();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(pageInfo);
  }, [pageInfo]);

  function handleValuesChange() {
    dispatch(resetPageInfo(form.getFieldsValue()));
  }

  return (
    <Form layout="vertical" form={form} onValuesChange={handleValuesChange}>
      <Form.Item
        label="问卷标题"
        name="title"
        rules={[{ required: true, message: '请输入问卷标题' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="问卷描述" name="desc">
        <TextArea placeholder="输入问卷描述" />
      </Form.Item>
      <Form.Item label="脚本代码" name="js">
        <TextArea placeholder="输入js脚本代码" />
      </Form.Item>
      <Form.Item label="样式代码" name="css">
        <TextArea placeholder="输入css样式代码" />
      </Form.Item>
    </Form>
  );
};

export default PageSetting;
