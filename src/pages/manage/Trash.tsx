import React, { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import { Typography, Empty, Table, Tag, Space, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styles from '@/assets/styles/pages/manage/common.module.scss';

import ListSearch from '@/components/ListSearch';

const { Title } = Typography;
const { confirm } = Modal;

const questionList = [
  {
    _id: '1',
    title: '测试问卷1',
    isStar: true,
    isPublished: true,
    answerCount: 6,
    createdAt: '3月12日 13:23',
  },
  {
    _id: '2',
    title: '测试问卷2',
    isStar: false,
    isPublished: false,
    answerCount: 10,
    createdAt: '3月12日 13:23',
  },
];

const Trash: FC = () => {
  useTitle('小朱问卷 - 回收站'); // 动态修改页面标题
  const [questionLists, setQuestionLists] = useState(questionList);
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  console.log(setQuestionLists);

  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>;
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ];

  function del() {
    confirm({
      title: '确认要删除所选的问卷吗?',
      icon: <ExclamationCircleOutlined />,
      content: '删除后将无法恢复?',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // 执行删除操作
        console.log('删除操作');
      },
    });
  }

  const tableEle = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedRowKeys.length === 0}>
            批量恢复
          </Button>
          <Button danger disabled={selectedRowKeys.length === 0} onClick={del}>
            批量删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionLists}
        columns={tableColumns}
        rowKey={record => record._id}
        pagination={false}
        rowSelection={{
          selectedRowKeys,
          onChange: selectedRowKeys => {
            setSelectedRowKeys(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch placeholder="输入关键字"></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && tableEle}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Trash;
