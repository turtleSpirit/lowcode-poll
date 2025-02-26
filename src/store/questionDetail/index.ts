import { createSlice } from '@reduxjs/toolkit';
import { QComponentPropsType } from '@/components/QuestionComponents/index';

export type ComponentInfoType = {
  re_id: string;
  type: string;
  title: string;
  props: QComponentPropsType;
};

export const questionSlice = createSlice({
  name: 'questionDetail',
  initialState: {},
  reducers: {
    setQuestionDetail: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
