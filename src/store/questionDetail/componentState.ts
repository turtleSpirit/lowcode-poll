import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QComponentPropsType } from '@/components/QuestionComponents/index';

import { insertNewComponent, getNextSelected, getCompomentById } from '../utils';

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  name: string;
  isHidden: boolean; // 是否隐藏
  props: QComponentPropsType;
};

export type ComponentsStateType = {
  selectedId: string;
  componentList: ComponentInfoType[];
  // 其他扩展
};

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
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
        curComp.isHidden = isHidden;
      }
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
} = componentStateSlice.actions;
export default componentStateSlice.reducer;
