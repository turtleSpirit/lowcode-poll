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
