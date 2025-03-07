import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetComponents, changeSelected } from '@/store/questionDetail/componentState';
import { resetPageInfo } from '@/store/pageInfoReducer';
import styles from '@/assets/styles/pages/question/Edit.module.scss';

import { pageInfo } from '@/data/question';

import EditCanvas from './EditCanvas';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import EditHeader from './EditHeader';

const QuestionEdit: FC = () => {
  const dispatch = useDispatch();
  const { componentList, title, desc, js, css } = pageInfo; // 获取到 questionDetail 里面的 componentList 状态
  useEffect(() => {
    let selectedId = '';
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id;
    }
    dispatch(
      resetComponents({
        selectedId,
        componentList: componentList,
        copiedComponent: null,
      })
    ); // 重置 componentList
    dispatch(
      resetPageInfo({
        title,
        desc,
        js,
        css,
      })
    ); // 重置 pageInfo
  }, []);
  /*清空选中*/
  function clearSelectedId() {
    dispatch(changeSelected(''));
  }
  return (
    <div className={styles.container}>
      <div>
        <EditHeader />
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas />
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionEdit;
