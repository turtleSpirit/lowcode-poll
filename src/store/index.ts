import { configureStore } from '@reduxjs/toolkit';
import componentStateSlice, { ComponentsStateType } from './questionDetail/componentState';
import pageInfoReducer, { PageInfoType } from './pageInfoReducer';

export type StateType = {
  componentState: ComponentsStateType;
  pageInfo: PageInfoType;
};

const store = configureStore({
  reducer: {
    componentState: componentStateSlice,
    pageInfo: pageInfoReducer,
  },
});

export default store;
