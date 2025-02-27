import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QComponentPropsType } from '@/components/QuestionComponents/index';

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
  },
});

export const { resetComponents } = componentStateSlice.actions;
export default componentStateSlice.reducer;
