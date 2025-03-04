/**
 * @description 输入框
 * @author zhuchunlai
 */

import Component from './Component';
import { QuestionParaGraphDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';
import PropComponent from './PropComponent';

export * from './interface';

export default {
  name: '段落',
  type: QuestionComponentsType.QuestionParagraph,
  defaultProps: QuestionParaGraphDefaultProps,
  Component,
  PropComponent,
};
