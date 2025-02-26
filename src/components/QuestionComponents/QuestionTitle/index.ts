/**
 * @description 标题
 * @author zhuchunlai
 */
import Component from './Component';
import { QuestionTitleDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';

export * from './interface';

export default {
  title: '标题',
  type: QuestionComponentsType.QuestionTitle,
  Component,
  defaultProps: QuestionTitleDefaultProps,
};
