import React, { FC, MouseEvent } from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import { getQComponentConfByType } from '@/components/QuestionComponents';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeSelected } from '@/store/questionDetail/componentState';

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
  const { componentList, selectedId } = useGetComponentInfo();

  function handleClick(e: MouseEvent, fe_id: string) {
    e.stopPropagation();
    dispatch(changeSelected(fe_id));
  }

  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c;
        const wrapperDefaultClassName = styles['component-wrapper'];
        const wrapperClassName = classNames({
          [wrapperDefaultClassName]: true,
          [styles['component-active']]: fe_id === selectedId,
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
