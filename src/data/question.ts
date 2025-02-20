import { QuestionComponentsType } from '@/constant/question';

export const questionDetail = [
  {
    id: 1,
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
    id: 2,
    type: QuestionComponentsType.QuestionInput,
    name: '输入框',
    nickName: '输入框',
    props: {
      title: '你的姓名',
      placeholder: '请输入姓名',
    },
  },
  {
    id: 3,
    type: QuestionComponentsType.QuestionInput,
    name: '输入框',
    nickName: '输入框',
    props: {
      title: '你的姓名1',
      placeholder: '请输入姓名1',
    },
  },
];
