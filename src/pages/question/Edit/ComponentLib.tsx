import React, { FC } from 'react';
import { Typography } from 'antd';
import { componentConfGroup, QComponentConfType } from '@/components/QuestionComponents';
import styles from '@/assets/styles/pages/question/ComponentLib.module.scss';
import { useDispatch } from 'react-redux';
import { addComponent } from '@/store/questionDetail/componentState';
import { nanoid } from 'nanoid';

const { Title } = Typography;

const Lib: FC = () => {
  const dispatch = useDispatch();
  function getComponent(c: QComponentConfType) {
    const { Component, name, type, defaultProps } = c;
    const handleClick = () => {
      const componentInfo = {
        fe_id: nanoid(),
        name,
        type,
        isHidden: false,
        props: defaultProps,
      };
      dispatch(addComponent(componentInfo));
    };
    return (
      <div key={type} className={styles.wrapper} onClick={handleClick}>
        <div className={styles.component}>
          <Component {...defaultProps} />
        </div>
      </div>
    );
  }
  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupName, groupType, components } = group;
        return (
          <div key={groupType}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : 0 }}>
              {groupName}
            </Title>
            <div>
              {components.map(component => {
                return getComponent(component as QComponentConfType);
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Lib;
