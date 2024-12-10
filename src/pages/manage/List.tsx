import React, { FC } from 'react';
import { useTitle } from 'ahooks';
import QuestionCard from '@/components/QuestionCard';
import styles from '@/assets/styles/pages/manage/common.module.scss';

const questionList = [
  {
    _id: '1',
    title: '测试问卷1',
    description: '测试问卷1描述',
    questionType: '单选题',
    questionCount: 5,
    createTime: '2021-01-01',
    updateTime: '2021-01-01',
    status: '已发布',
  },
  {
    _id: '2',
    title: '测试问卷2',
    description: '测试问卷2描述',
    questionType: '多选题',
    questionCount: 10,
    createTime: '2021-01-01',
    updateTime: '2021-01-01',
    status: '已发布',
  },
  {
    _id: '3',
    title: '测试问卷3',
    description: '测试问卷3描述',
    questionType: '问答题',
    questionCount: 20,
  },
];

const List: FC = () => {
  useTitle('测试问卷 - 我的问卷'); // 动态修改页面标题
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}> (搜索) </div>
      </div>
      <div className={styles.content}>
        {questionList.map(q => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q} />;
        })}
      </div>
      <div className={styles.footer}> list page footer </div>
    </>
  );
};

export default List;
