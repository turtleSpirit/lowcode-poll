import { QuestionComponentsType } from '@/constant/question';
import { nanoid } from 'nanoid';

export const questionDetail = [
  {
    id: nanoid(6),
    type: QuestionComponentsType.QuestionTitle,
    name: '标题',
    nickName: '标题',
    props: {
      text: '',
      level: 1,
      isCenter: false,
    },
  },
  {
    id: nanoid(6),
    type: QuestionComponentsType.QuestionInput,
    name: '输入框',
    nickName: '输入框',
    props: {
      title: '你的姓名',
      placeholder: '请输入姓名',
    },
  },
  {
    id: nanoid(6),
    type: QuestionComponentsType.QuestionInput,
    name: '输入框',
    nickName: '输入框',
    props: {
      title: '你的姓名1',
      placeholder: '请输入姓名1',
    },
  },
];
