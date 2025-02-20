import React, { FC } from 'react';

import styles from '@/assets/styles/pages/question/EditCanvas.module.scss';

import QuestionInput from '@/components/QuestionComponents/QuestionInput';
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle';

const EditCanvas: FC = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  );
};

export default EditCanvas;
