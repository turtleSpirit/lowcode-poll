/**
 * @description 标题
 * @author zhuchunlai
 */
import Component from './Component';
import PropComponent from './PropComponent';
import { QuestionTitleDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';

export * from './interface';

export default {
  name: '标题',
  type: QuestionComponentsType.QuestionTitle,
  PropComponent,
  Component,
  defaultProps: QuestionTitleDefaultProps,
};
