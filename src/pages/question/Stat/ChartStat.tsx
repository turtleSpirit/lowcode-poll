import React, { FC, useState } from 'react';
import { Typography } from 'antd';

import { getQComponentConfByType } from '@/components/QuestionComponents';

type PropsType = {
  selectedComponentId: string;
  selectedComponentType: string;
};

const { Title } = Typography;

const ChartStat: FC<PropsType> = props => {
  const { selectedComponentId, selectedComponentType } = props;
  const [stat, setStat] = useState([
    { name: '选项1', count: 20 },
    { name: '选项2', count: 10 },
    { name: '选项3', count: 25 },
  ]);

  function genStatElem() {
    if (!selectedComponentId) return <div>未选中组件</div>;

    const { StatComponent } = getQComponentConfByType(selectedComponentType) || {};
    if (StatComponent == null) return <div>该组件无统计图表</div>;

    return <StatComponent stat={stat} />;
  }
  return (
    <>
      <Title level={3}>图表统计</Title>
      <div>{genStatElem()}</div>
    </>
  );
};

export default ChartStat;
