import { QuestionComponentsType } from '@/constant/question';
import { nanoid } from 'nanoid';

export const componentList = [
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionTitle,
    name: '标题',
    isHidden: false, // 是否隐藏
    props: {
      text: '问卷1',
      level: 1,
      isCenter: false,
    },
  },
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionInput,
    isHidden: false, // 是否隐藏
    name: '输入框',
    props: {
      title: '你的姓名',
      placeholder: '请输入姓名',
      value: '张三',
    },
  },
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionInput,
    isHidden: false, // 是否隐藏
    name: '输入框',
    props: {
      title: '爱好',
      placeholder: '请输入爱好',
      value: '打篮球',
    },
  },
];
