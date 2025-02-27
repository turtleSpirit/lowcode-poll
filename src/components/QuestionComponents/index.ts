import { FC } from 'react';

import QuestionInputConf, { QuestionInputProps } from './QuestionInput';
import QuestionTitleConf, { QuestionTitleProps } from './QuestionTitle';

// 统一，各个组件的prop type
export type QComponentPropsType = QuestionInputProps & QuestionTitleProps;

// 统一 组件的配置
export type QComponentConfType = {
  name: string;
  type: string;
  Component: FC<QComponentPropsType>;
  defaultProps: QComponentPropsType;
};

// 全部的组件配置列表
const qComponentConfObj: { [key: string]: QComponentConfType } = {
  QuestionInputConf,
  QuestionTitleConf,
};

// 组件分组

export const componentConfGroup = [
  {
    groupName: '文本显示',
    groupType: 'group-text',
    components: [QuestionTitleConf],
  },
  {
    groupName: '文本输入',
    groupType: 'group-input',
    components: [QuestionInputConf],
  },
];

export function getQComponentConfByType(type: string) {
  return qComponentConfObj[type];
}
