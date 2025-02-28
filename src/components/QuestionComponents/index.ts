import { FC } from 'react';

import QuestionInputConf, { QuestionInputProps, InputPropsType } from './QuestionInput';
import QuestionTitleConf, { QuestionTitleProps, TitlePropsType } from './QuestionTitle';

// 统一，各个组件的prop type
export type QComponentPropsType = QuestionInputProps & QuestionTitleProps;

// 统一，各个组件的prop type
export type ComponentPropType = InputPropsType & TitlePropsType;

// 统一 组件的配置
export type QComponentConfType = {
  name: string;
  type: string;
  defaultProps: QComponentPropsType;
  Component: FC<QComponentPropsType>;
  PropComponent: FC<ComponentPropType>;
};

// 全部的组件配置列表
const qComponentConfObj: { [key: string]: QComponentConfType } = {
  QuestionInput: QuestionInputConf,
  QuestionTitle: QuestionTitleConf,
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
