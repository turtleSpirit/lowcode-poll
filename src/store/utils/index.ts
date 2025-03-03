import type { ComponentsStateType, ComponentInfoType } from '../questionDetail/componentState';

export function insertNewComponent(state: ComponentsStateType, newComponent: ComponentInfoType) {
  const { selectedId, componentList } = state;
  const index = componentList.findIndex(c => c.fe_id === selectedId);
  if (index < 0) {
    componentList.push(newComponent);
  } else {
    componentList.splice(index + 1, 0, newComponent);
  }
  state.selectedId = newComponent.fe_id;
}

export function getCompomentById(fe_id: string, componentList: ComponentInfoType[]) {
  return componentList.find(c => c.fe_id === fe_id);
}

/*获取当前fe_id的下一个组件信息*/
export function getNextSelected(componentList: ComponentInfoType[], fe_id: string) {
  const index = componentList.findIndex(c => c.fe_id === fe_id);
  if (index < 0) {
    new Error('选中组件不存在');
    return { index: -1 };
  }

  // 重新计算 selectedId
  let newSelectedComponent: ComponentInfoType | undefined;
  let newSelectedId = '';
  const length = componentList.length;
  if (length <= 1) {
    // 组件长度就一个，被删除了，就没有组件
    newSelectedId = '';
  } else {
    // 组件长度 > 1
    if (index + 1 === length) {
      // 要删除最后一个，就要选中上一个
      newSelectedComponent = componentList[index - 1];
      newSelectedId = newSelectedComponent.fe_id;
    } else {
      // 要删除的不是最后一个，删除以后，选中下一个
      newSelectedComponent = componentList[index + 1];
      newSelectedId = newSelectedComponent.fe_id;
    }
  }
  return { index, newSelectedId, newSelectedComponent };
}
