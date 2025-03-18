import React, { FC, MouseEvent } from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';

import { getQComponentConfByType } from '@/components/QuestionComponents';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeSelected, moveComponent } from '@/store/questionDetail/componentState';
import useBindCanvasKeyPress from '@/hooks/useBindCanvasKeyPress';

import styles from '@/assets/styles/pages/question/EditCanvas.module.scss';

import type { ComponentInfoType } from '@/store/questionDetail/componentState';

import SortableContainer from '@/components/DragSortable/SortableContainer';
import SortableItem from '@/components/DragSortable/SortableItem';

function getComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo;

  const componentConf = getQComponentConfByType(type);
  if (!componentConf) return null;

  const { Component } = componentConf;
  return <Component {...props} />;
}

const EditCanvas: FC = () => {
  const dispatch = useDispatch();
  useBindCanvasKeyPress();

  const { componentList, selectedId } = useGetComponentInfo();

  function handleClick(e: MouseEvent, fe_id: string) {
    e.stopPropagation();
    dispatch(changeSelected(fe_id));
  }
  const componentListWithId = componentList.map(c => {
    return {
      ...c,
      id: c.fe_id,
    };
  });

  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(moveComponent({ oldIndex, newIndex }));
  }

  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
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
              <SortableItem key={c.fe_id} id={c.fe_id}>
                <div className={wrapperClassName} key={fe_id} onClick={e => handleClick(e, fe_id)}>
                  <div className={styles.component}>{getComponent(c)}</div>
                </div>
              </SortableItem>
            );
          })}
      </div>
    </SortableContainer>
  );
};

export default EditCanvas;
