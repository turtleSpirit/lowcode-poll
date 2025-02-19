import React, { FC } from 'react';
import styles from '@/assets/styles/pages/question/Edit.module.scss';

import EditCanvas from './EditCanvas';

const QuestionEdit: FC = () => {
  return (
    <div className={styles.container}>
      <div>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
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
