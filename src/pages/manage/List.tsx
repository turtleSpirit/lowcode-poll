import React, { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import { Typography } from 'antd';
import QuestionCard from '@/components/QuestionCard';
import styles from '@/assets/styles/pages/manage/common.module.scss';

const { Title } = Typography;

const questionList = [
  {
    _id: '1',
    title: '测试问卷1',
    isStar: true,
    isPublished: true,
    answerCount: 10,
    createdAt: '张三',
  },
  {
    _id: '2',
    title: '测试问卷2',
    isStar: false,
    isPublished: false,
    answerCount: 10,
    createdAt: '李四',
  },
];

const List: FC = () => {
  useTitle('测试问卷 - 我的问卷'); // 动态修改页面标题
  const [questionLists, setQuestionLists] = useState(questionList);
  console.log(setQuestionLists);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}> (搜索) </div>
      </div>
      <div className={styles.content}>
        {questionLists.map(q => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q} />;
        })}
      </div>
      <div className={styles.footer}> loading... 下拉加载更多 </div>
    </>
  );
};

export default List;
