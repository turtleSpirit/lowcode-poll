/**
 * @description 输入框
 * @author zhuchunlai
 */

import Component from './Component';
import { QuestionInputDefaultProps } from './interface';
import { QuestionComponentsType } from '@/constant/question';

export * from './interface';

export default {
  title: '标题',
  type: QuestionComponentsType.QuestionInput,
  Component,
  defaultProps: QuestionInputDefaultProps,
};
