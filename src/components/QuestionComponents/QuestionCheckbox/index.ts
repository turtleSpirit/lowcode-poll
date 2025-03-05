/**
 * @description 标题
 * @author zhuchunlai
 */
import Component from './Component';
import PropComponent from './PropComponent';
import { QuestionCheckboxDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';

export * from './interface';

export default {
  name: '多选',
  type: QuestionComponentsType.QuestionCheckbox,
  defaultProps: QuestionCheckboxDefaultProps,
  PropComponent,
  Component,
};
