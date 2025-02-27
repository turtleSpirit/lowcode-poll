import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetComponents, ComponentInfoType } from '@/store/questionDetail/componentState';
import styles from '@/assets/styles/pages/question/Edit.module.scss';

import { componentList } from '@/data/question';

import EditCanvas from './EditCanvas';
import LeftPanel from './LeftPanel';

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
      })
    ); // 重置 componentList
  }, []);
  return (
    <div className={styles.container}>
      <div>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel />
          </div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas />
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionEdit;
