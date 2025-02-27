import { configureStore } from '@reduxjs/toolkit';
import componentStateSlice, { ComponentsStateType } from './questionDetail/componentState';

export type StateType = {
  componentState: ComponentsStateType;
};

const store = configureStore({
  reducer: {
    componentState: componentStateSlice,
  },
});

export default store;
