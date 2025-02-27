import { QuestionComponentsType } from '@/constant/question';
import { nanoid } from 'nanoid';

export const componentList = [
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionTitle,
    title: '标题',
    props: {
      text: '',
      level: 1,
      isCenter: false,
    },
  },
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionInput,
    title: '输入框',
    props: {
      title: '你的姓名',
      placeholder: '请输入姓名',
    },
  },
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionInput,
    title: '输入框',
    props: {
      title: '你的姓名1',
      placeholder: '请输入姓名1',
    },
  },
];
