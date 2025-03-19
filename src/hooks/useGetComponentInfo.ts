import { useSelector } from 'react-redux';

import type { StateType } from '@/store';

// 获取文件编辑页信息
function useGetComponentInfo() {
  const componentsState = useSelector((state: StateType) => {
    console.log('%c打印: state %o', 'color: red ;', state);

    return state.componentState.present;
  });

  const { componentList = [], selectedId, copiedComponent } = componentsState;

  const selectedComponent = componentList.find(component => component.fe_id === selectedId);
  console.log('%c打印: componentList %o', 'color: red ;', componentsState);

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  };
}

export default useGetComponentInfo;
