/**
 * @description 输入框
 * @author zhuchunlai
 */

import Component from './Component';
import { QuestionInfoDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';
import PropComponent from './PropComponent';

export * from './interface';

export default {
  name: '问卷信息',
  type: QuestionComponentsType.QuestionInfo,
  defaultProps: QuestionInfoDefaultProps,
  Component,
  PropComponent,
};
