import { useSelector } from 'react-redux';

import type { StateType } from '@/store';

// 获取文件编辑页信息
function useGetComponentInfo() {
  const componentsState = useSelector((state: StateType) => state.componentState);
  const { componentList = [], selectedId, copiedComponent } = componentsState;

  const selectedComponent = componentList.find(component => component.fe_id === selectedId);

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  };
}

export default useGetComponentInfo;
