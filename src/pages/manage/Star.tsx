import React, { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import { Typography, Empty } from 'antd';
import QuestionCard from '@/components/QuestionCard';
import ListSearch from '@/components/ListSearch';
import styles from '@/assets/styles/pages/manage/common.module.scss';

const { Title } = Typography;

const rawQuestionList = [
  {
    _id: '1',
    title: '测试问卷1',
    isStar: true,
    isPublished: true,
    answerCount: 10,
    createdAt: '3月10日 13:23',
  },
];

const Star: FC = () => {
  useTitle('小朱问卷 - 星标问卷'); // 动态修改页面标题

  const [questionList, setQuestionList] = useState(rawQuestionList);
  console.log(setQuestionList);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;
