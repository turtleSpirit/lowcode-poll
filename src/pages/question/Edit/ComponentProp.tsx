import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeComponentProps } from '@/store/questionDetail/componentState';

import { getQComponentConfByType, ChangeFromValue } from '@/components/QuestionComponents';
import useGetComponentInfo from '@/hooks/useGetComponentInfo';

const NoProp: FC = () => {
  return <div>没有选中组件</div>;
};
const ComponentProp: FC = () => {
  const dispatch = useDispatch();

  const { selectedComponent } = useGetComponentInfo();
  if (!selectedComponent) return <NoProp />;
  const { type, props, name, fe_id } = selectedComponent;
  const componentConf = getQComponentConfByType(type);
  if (componentConf == null) return <NoProp />;

  function handleChange(fromValue: ChangeFromValue) {
    const { name, ...newProps } = fromValue;
    dispatch(
      changeComponentProps({
        fe_id,
        newProps,
        name: name,
      })
    );
  }

  const { PropComponent } = componentConf;
  return <PropComponent {...{ name: name, prop: props }} onChange={handleChange} />;
};

export default ComponentProp;
