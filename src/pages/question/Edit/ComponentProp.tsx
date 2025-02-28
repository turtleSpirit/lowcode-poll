import React, { FC } from 'react';

// import { getQComponentConfByType } from '@/components/QuestionComponents';
// import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const NoProp: FC = () => {
  return <div>没有选中组件</div>;
};
const ComponentProp: FC = () => {
  //   const { selectedId } = useGetComponentInfo();
  //   if (!selectedId) return <NoProp />;
  //   const componentConf = getQComponentConfByType(selectedId);
  //   if (componentConf == null) return <NoProp />;

  //   const { PropComponent, props } = componentConf;
  //   return <PropComponent {...props} />;
  return <NoProp />;
};

export default ComponentProp;
