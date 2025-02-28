import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QComponentPropsType } from '@/components/QuestionComponents/index';

import { insertNewComponent } from '../utils';

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
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
  },
});

export const { resetComponents, changeSelected, addComponent } = componentStateSlice.actions;
export default componentStateSlice.reducer;
