import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetComponents,
  ComponentInfoType,
  changeSelected,
} from '@/store/questionDetail/componentState';
import styles from '@/assets/styles/pages/question/Edit.module.scss';

import { componentList } from '@/data/question';

import EditCanvas from './EditCanvas';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import EditHeader from './EditHeader';

const QuestionEdit: FC = () => {
  const dispatch = useDispatch();
  const data = componentList as ComponentInfoType[];
  useEffect(() => {
    let selectedId = '';
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id;
    }
    dispatch(
      resetComponents({
        selectedId,
        componentList: data,
        copiedComponent: null,
      })
    ); // 重置 componentList
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
