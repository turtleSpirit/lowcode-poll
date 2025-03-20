import React, { FC, useState } from 'react';
import { Typography, Spin, Table } from 'antd';

import { getStatList } from '@/data/stat';
import { pageInfo } from '@/data/question';

const { Title } = Typography;

type PropsType = {
  selectedComponentId: string;
  setSelectedComponentId: (id: string) => void;
  setSelectedComponentType: (type: string) => void;
};

const PageStat: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, setSelectedComponentId, setSelectedComponentType } = props;
  const { componentList } = pageInfo;

  const stateList = getStatList();

  const [list, setList] = useState(stateList); // TODO: 获取数据

  const column = componentList.map(c => {
    const { fe_id, name, props, type } = c;
    const colTitle = props!.title || name;
    return {
      // title: colTitle,
      title: (
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setSelectedComponentId(fe_id);
            setSelectedComponentType(type);
          }}
        >
          <span style={{ color: fe_id === selectedComponentId ? '#1890ff' : 'inherit' }}>
            {colTitle}
          </span>
        </div>
      ),
      dataIndex: fe_id,
      key: fe_id,
    };
  });

  const TableEle = <Table columns={column} dataSource={list} rowKey="_id" />;

  return (
    <div>
      <Title level={3}>答卷数量：{list.length}</Title>
      {TableEle}
    </div>
  );
};
export default PageStat;
