import React, { FC } from 'react';
import { Typography } from 'antd';
import { componentConfGroup, QComponentConfType } from '@/components/QuestionComponents';
import styles from '@/assets/styles/pages/question/ComponentLib.module.scss';

const { Title } = Typography;

const Lib: FC = () => {
  function getComponent(c: QComponentConfType) {
    const { Component } = c;
    return (
      <div className={styles.wrapper}>
        <div className={styles.component}>
          <Component></Component>
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
                return getComponent(component);
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Lib;
