import { useSelector } from 'react-redux';

import type { StateType } from '@/store';

function useGetComponentInfo() {
  const componentsState = useSelector((state: StateType) => state.componentState);
  const { componentList = [], selectedId } = componentsState;

  return {
    componentList,
    selectedId,
  };
}

export default useGetComponentInfo;
