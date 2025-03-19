import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Result, Button } from 'antd';
import { useTitle } from 'ahooks';
import { pageInfo, pageEditInfo } from '@/data/question';
import styles from '@/assets/styles/pages/stat/index.module.scss';

import { useDispatch } from 'react-redux';
import { resetComponents } from '@/store/questionDetail/componentState';

import StatHeader from './StatHeader';
import ComponentList from './ComponentList';
import PageStat from './PageStat';

const QuestionStat: FC = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { title, isPublished } = pageInfo;
  const { componentList } = pageInfo;
  const [loading, setLoading] = useState(false);

  // 状态提升selectedId type
  const [selectedComponentId, setSelectedComponentId] = useState('');
  const [selectedComponentType, setSelectedComponentType] = useState('');

  useEffect(() => {
    setLoading(true);
    // 获取问卷数据
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 模拟异步获取数据，1s 后返回数据

    const selectedId = '';
    dispatch(
      resetComponents({
        selectedId,
        componentList: componentList,
        copiedComponent: null,
      })
    );
  }, []);

  useTitle(`问卷统计 ${title}`);

  // loading 效果
  const LoadingELem = (
    <div style={{ textAlign: 'center', margin: '0 auto', marginTop: '60px' }}>
      <Spin />
    </div>
  );

  function getContentEle() {
    if (typeof isPublished === 'boolean' && !isPublished) {
      return (
        <div style={{ flex: '1' }}>
          <Result
            status="warning"
            title="该问卷未发布"
            extra={
              <Button type="primary" onClick={() => nav(-1)}>
                返回
              </Button>
            }
          ></Result>
        </div>
      );
    }
    return (
      <>
        <div className={styles.left}>
          <ComponentList
            selectedComponentId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedComponentType={setSelectedComponentType}
          />
        </div>
        <div className={styles.main}>
          <PageStat
            selectedComponentId={selectedComponentId}
            setSelectedComponentId={setSelectedComponentId}
            setSelectedComponentType={setSelectedComponentType}
          />
        </div>
        <div className={styles.right}>right</div>
      </>
    );
  }
  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles['content-wrapper']}>
        {loading ? LoadingELem : <div className={styles.content}>{getContentEle()}</div>}
      </div>
    </div>
  );
};

export default QuestionStat;
