import { configureStore } from '@reduxjs/toolkit';
import componentStateSlice, { ComponentsStateType } from './questionDetail/componentState';
import pageInfoReducer, { PageInfoType } from './pageInfoReducer';
import undoable, { excludeAction, StateWithHistory } from 'redux-undo';

export type StateType = {
  // 没有增加redux-undo
  //componentState: ComponentsStateType;

  // 增加redux-undo
  componentState: StateWithHistory<ComponentsStateType>;
  pageInfo: PageInfoType;
};

const store = configureStore({
  reducer: {
    // 没有增加redux-undo
    // componentState: componentStateSlice,

    // 增加redux-undo
    componentState: undoable(componentStateSlice, {
      limit: 30, // 限制undo次数
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ]),
    }), // 最多记录10次 undo/redo actions
    pageInfo: pageInfoReducer,
  },
});

export default store;
