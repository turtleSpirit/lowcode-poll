import { useSelector } from 'react-redux';

import type { StateType } from '@/store';
import { StateWithHistory } from 'redux-undo';

// 获取文件编辑页信息
function useGetComponentInfo() {
  const componentsState = useSelector((state: StateType) => state.componentState.present);

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
