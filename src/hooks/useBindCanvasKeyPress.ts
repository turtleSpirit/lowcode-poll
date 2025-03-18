import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import {
  removeSelectedComponent,
  copySelectedComponent,
  pasteComponent,
  selectPrevComponent,
  selectNextComponent,
} from '@/store/questionDetail/componentState';

/**
 * 判断 activeElem 是否合法
 */
function isActiveElementValid() {
  const activeEle = document.activeElement;

  // 没有增加dnd-kit之前
  // if (activeEle === document.body) return true;

  // 增加dnd-kit之后
  if (activeEle === document.body) return true;
  if (activeEle?.matches('div[role="button"]')) return true;
  return false;
}

function callback(fn: () => void) {
  if (!isActiveElementValid()) return;
  fn();
}

function useBindCanvasKeyPress() {
  const dispatch = useDispatch();

  // 删除组件
  useKeyPress(['delete', 'backspace'], () => {
    callback(() => {
      dispatch(removeSelectedComponent());
    });
  });

  // 复制组件
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    callback(() => {
      dispatch(copySelectedComponent());
    });
  });

  // 粘贴组件
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    callback(() => {
      dispatch(pasteComponent());
    });
  });

  // 选中上一个
  useKeyPress(['uparrow'], () => {
    callback(() => {
      dispatch(selectPrevComponent());
    });
  });
  // 选中下一个
  useKeyPress(['downarrow'], () => {
    callback(() => {
      dispatch(selectNextComponent());
    });
  });

  // 撤销
  useKeyPress(
    ['ctrl.z', 'meta.z'],
    () => {
      callback(() => {
        dispatch(UndoActionCreators.undo());
      });
    },
    {
      exactMatch: true,
    }
  );
  // 重做
  useKeyPress(['ctrl.shift.z', 'meta.shift.z'], () => {
    callback(() => {
      dispatch(UndoActionCreators.redo());
    });
  });
}

export default useBindCanvasKeyPress;
