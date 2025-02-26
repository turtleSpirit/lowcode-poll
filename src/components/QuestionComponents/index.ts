import { FC } from 'react';

import QuestionInputConf, { QuestionInputProps } from './QuestionInput';
import QuestionTitleConf, { QuestionTitleProps } from './QuestionTitle';

// 统一，各个组件的prop type
export type QComponentPropsType = QuestionInputProps & QuestionTitleProps;

// 统一 组件的配置
export type QComponentConfType = {
  title: string;
  type: string;
  Component: FC<QComponentPropsType>;
  defaultProps: QComponentPropsType;
};

// 全部的组件配置列表
const qComponentConfObj: { [key: string]: QComponentConfType } = {
  QuestionInputConf,
  QuestionTitleConf,
};

export function getQComponentConfByType(type: string) {
  return qComponentConfObj[type];
}
