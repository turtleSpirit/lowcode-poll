import { FC } from 'react';
import { QuestionComponentsType } from '@/constant/question';

import QuestionInputConf, {
  QuestionInputProps,
  InputPropsType,
  FromValueInput,
} from './QuestionInput';
import QuestionTitleConf, {
  QuestionTitleProps,
  TitlePropsType,
  FromValueTitle,
} from './QuestionTitle';
import QuestionParagraphConf, {
  QuestionParaGraphProps,
  ParaGraphPropsType,
  FromValueParaGraph,
} from './QuestionParagraph';
import QuestionInfoConf, { QuestionInfoProps, InfoPropsType, FromValueInfo } from './QuestionInfo';

// 统一，各个组件的prop type
export type QComponentPropsType =
  | QuestionInputProps
  | QuestionTitleProps
  | QuestionParaGraphProps
  | QuestionInfoProps;

// 统一，各个组件的prop type
export type ComponentPropType = InputPropsType &
  TitlePropsType &
  ParaGraphPropsType &
  InfoPropsType;

export type ChangeFromValue = FromValueInput | FromValueTitle | FromValueParaGraph | FromValueInfo;

// 统一 组件的配置
export type QComponentConfType = {
  name: string;
  type: string;
  defaultProps: QComponentPropsType;
  Component: FC<QComponentPropsType>;
  PropComponent: FC<ComponentPropType>;
};

// 全部的组件配置列表
const qComponentConfObj = {
  [QuestionComponentsType.QuestionInput]: QuestionInputConf,
  [QuestionComponentsType.QuestionTitle]: QuestionTitleConf,
  [QuestionComponentsType.QuestionParagraph]: QuestionParagraphConf,
  [QuestionComponentsType.QuestionInfo]: QuestionInfoConf,
};

// 组件分组

export const componentConfGroup = [
  {
    groupName: '文本显示',
    groupType: 'group-text',
    components: [QuestionTitleConf, QuestionParagraphConf, QuestionInfoConf],
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
