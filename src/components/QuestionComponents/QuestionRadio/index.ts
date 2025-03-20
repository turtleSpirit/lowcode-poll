/**
 * @description 标题
 * @author zhuchunlai
 */
import Component from './Component';
import PropComponent from './PropComponent';
import { QuestionRadioDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';
import StatComponent from './StatComponent';

export * from './interface';

export default {
  name: '单选',
  type: QuestionComponentsType.QuestionRadio,
  defaultProps: QuestionRadioDefaultProps,
  PropComponent,
  Component,
  StatComponent,
};
