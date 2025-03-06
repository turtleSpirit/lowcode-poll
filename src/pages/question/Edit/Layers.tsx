import React, { ChangeEvent, FC, useState } from 'react';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import {
  changeSelected,
  toggleComponentLocked,
  changeComponentHidden,
  changeComponentName,
} from '@/store/questionDetail/componentState';
import { message, Button, Space, Input } from 'antd';
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons';

import styles from '@/assets/styles/pages/question/Layers.module.scss';

const Layers: FC = () => {
  const dispatch = useDispatch();
  const { selectedId, componentList } = useGetComponentInfo();
  const [changeTitleId, setChangeTitleId] = useState<string>(''); // 修改标题的id

  function handleTitleClick(fe_id: string) {
    const curComp = componentList.find(c => c.fe_id === fe_id);
    if (curComp && curComp.isHidden) {
      message.info('不能选中隐藏的组件');
      return;
    }
    if (fe_id !== selectedId) {
      dispatch(changeSelected(fe_id));
      setChangeTitleId('');
      return;
    }
    setChangeTitleId(fe_id);
  }
  function changeHidden(fe_id: string, isHidden: boolean) {
    dispatch(changeComponentHidden({ fe_id, isHidden: !isHidden }));
  }
  function changeLocked(fe_id: string) {
    dispatch(toggleComponentLocked({ fe_id }));
  }
  function changeTitle(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!value || !selectedId) return;
    dispatch(changeComponentName({ fe_id: selectedId, name: value }));
  }
  return (
    <>
      {componentList.map(c => {
        const { fe_id, name, isLocked, isHidden } = c;
        const titleDefaultClassName = styles.title;
        const selectedClassName = styles.selected;
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        });
        return (
          <div key={fe_id} className={styles.wrapper}>
            <div className={titleClassName} onClick={() => handleTitleClick(fe_id)}>
              {fe_id === changeTitleId && (
                <Input
                  value={name}
                  onPressEnter={() => setChangeTitleId('')}
                  onBlur={() => setChangeTitleId('')}
                  onChange={changeTitle}
                />
              )}
              {fe_id !== changeTitleId && name}
            </div>
            <div className={styles.handler}>
              <Space>
                <Button
                  size="small"
                  shape="circle"
                  icon={<EyeInvisibleOutlined />}
                  type={isHidden ? 'primary' : 'text'}
                  className={!isHidden ? styles.btn : ''}
                  onClick={() => changeHidden(fe_id, isHidden as boolean)}
                ></Button>
                <Button
                  size="small"
                  shape="circle"
                  icon={<LockOutlined />}
                  type={isLocked ? 'primary' : 'text'}
                  className={!isLocked ? styles.btn : ''}
                  onClick={() => changeLocked(fe_id)}
                ></Button>
              </Space>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Layers;
