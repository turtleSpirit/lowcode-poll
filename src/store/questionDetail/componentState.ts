import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QComponentPropsType } from '@/components/QuestionComponents/index';

import { insertNewComponent, getNextSelected, getCompomentById } from '../utils';
import clonedeep from 'lodash.clonedeep';
import { nanoid } from 'nanoid';

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  name: string;
  isHidden?: boolean; // 是否隐藏
  isLocked?: boolean; // 是否锁定
  props: QComponentPropsType;
};

export type ComponentsStateType = {
  selectedId: string;
  componentList: ComponentInfoType[];
  // 其他扩展
  copiedComponent: ComponentInfoType | null;
};

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  copiedComponent: null,
};

const componentStateSlice = createSlice({
  name: 'questionComponentState',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
      return action.payload;
    },
    /*选中组件*/
    changeSelected: (state: ComponentsStateType, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },
    /*添加组件到画布*/
    addComponent: (state: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
      insertNewComponent(state, action.payload);
    },
    /*修改组件属性*/
    changeComponentProps: (
      state: ComponentsStateType,
      action: PayloadAction<{ fe_id: string; newProps: QComponentPropsType; name: string }>
    ) => {
      const { componentList } = state;
      const { fe_id, newProps, name } = action.payload;

      const curComp = componentList.find(c => c.fe_id === fe_id);
      if (curComp) {
        curComp.props = { ...curComp.props, ...newProps };
        curComp.name = name;
      }
    },
    /*修改组件属性*/
    removeSelectedComponent: (state: ComponentsStateType) => {
      const { selectedId, componentList } = state;
      const { index, newSelectedId } = getNextSelected(componentList, selectedId);

      if (index > -1) {
        // 若删除的是所选组件，重置所选状态
        componentList.splice(index, 1);
        state.selectedId = newSelectedId || '';
      }
    },
    /*显隐藏组件*/
    changeComponentHidden: (
      state: ComponentsStateType,
      action: PayloadAction<{ fe_id: string; isHidden: boolean }>
    ) => {
      const { componentList = [] } = state;
      const { fe_id, isHidden } = action.payload;
      const curComp = getCompomentById(fe_id, componentList);

      if (curComp) {
        let selectedId = '';
        if (isHidden) {
          selectedId = fe_id;
        } else {
          const { newSelectedId } = getNextSelected(componentList, fe_id);
          selectedId = newSelectedId || '';
        }
        curComp.isHidden = isHidden;
        state.selectedId = selectedId;
      }
    },
    /*组件锁定解锁*/
    toggleComponentLocked: (
      state: ComponentsStateType,
      action: PayloadAction<{ fe_id: string }>
    ) => {
      const { componentList = [] } = state;
      const { fe_id } = action.payload;
      const curComp = getCompomentById(fe_id, componentList);

      if (curComp) {
        curComp.isLocked = !curComp.isLocked;
      }
    },
    /*拷贝当前选中组件*/
    copySelectedComponent: (state: ComponentsStateType) => {
      const { selectedId, componentList = [] } = state;
      const curComp = getCompomentById(selectedId, componentList);
      if (!curComp) return;
      state.copiedComponent = clonedeep(curComp);
    },
    /*粘贴组件*/
    pasteComponent: (state: ComponentsStateType) => {
      const { copiedComponent } = state;
      if (!copiedComponent) return;
      // 要把fe_id给修改一下
      copiedComponent.fe_id = nanoid();
      insertNewComponent(state, copiedComponent);
    },
    // 选中上一个组件
    selectPrevComponent: (state: ComponentsStateType) => {
      const { componentList = [], selectedId } = state;
      const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId);

      if (selectedIndex < 0) return; // 未选中组件
      if (selectedIndex <= 0) return; // 已经选中了第一个，无法在向上选中

      state.selectedId = componentList[selectedIndex - 1].fe_id;
    },
    // 选中下一个组件
    selectNextComponent: (state: ComponentsStateType) => {
      const { componentList = [], selectedId } = state;
      const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId);

      if (selectedIndex < 0) return; // 未选中组件
      if (selectedIndex + 1 === componentList.length) return; // 已经选中了最后一个，无法再向下选中

      state.selectedId = componentList[selectedIndex + 1].fe_id;
    },
  },
});

export const {
  resetComponents,
  changeSelected,
  addComponent,
  changeComponentProps,
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteComponent,
  selectPrevComponent,
  selectNextComponent,
} = componentStateSlice.actions;
export default componentStateSlice.reducer;
