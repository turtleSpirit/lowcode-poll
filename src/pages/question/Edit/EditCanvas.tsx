import React, { FC } from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
// import { getComponentConfByType } from '@/components/QuestionComponents';
// import classNames from 'classnames';

import styles from '@/assets/styles/pages/question/EditCanvas.module.scss';

const EditCanvas: FC = () => {
  const { componentList /*selectedId*/ } = useGetComponentInfo();
  return (
    <div className={styles.canvas}>
      {componentList.map(component => {
        return (
          <div className={styles['component-wrapper']} key={component.fe_id}>
            {/* <div className={styles.component}>{getComponentConfByType(component)}</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default EditCanvas;
