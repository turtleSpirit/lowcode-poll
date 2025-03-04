import React, { FC, MouseEvent } from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { getQComponentConfByType } from '@/components/QuestionComponents';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeSelected } from '@/store/questionDetail/componentState';
import useBindCanvasKryPress from '@/hooks/useBindCanvasKryPress';

import styles from '@/assets/styles/pages/question/EditCanvas.module.scss';

import type { ComponentInfoType } from '@/store/questionDetail/componentState';

function getComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo;

  const componentConf = getQComponentConfByType(type);
  if (!componentConf) return null;

  const { Component } = componentConf;
  return <Component {...props} />;
}

const EditCanvas: FC = () => {
  const dispatch = useDispatch();
  useBindCanvasKryPress();

  const { componentList, selectedId } = useGetComponentInfo();

  function handleClick(e: MouseEvent, fe_id: string) {
    e.stopPropagation();
    dispatch(changeSelected(fe_id));
  }

  return (
    <div className={styles.canvas}>
      {componentList
        .filter(c => !c.isHidden)
        .map(c => {
          const { fe_id, isLocked } = c;
          const wrapperDefaultClassName = styles['component-wrapper'];
          const wrapperLockedClassName = styles.locked;
          const wrapperClassName = classNames({
            [wrapperDefaultClassName]: true,
            [styles['component-active']]: fe_id === selectedId,
            [wrapperLockedClassName]: isLocked,
          });
          return (
            <div className={wrapperClassName} key={fe_id} onClick={e => handleClick(e, fe_id)}>
              <div className={styles.component}>{getComponent(c)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default EditCanvas;
