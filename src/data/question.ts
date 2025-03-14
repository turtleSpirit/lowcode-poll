import { QuestionComponentsType } from '@/constant/question';
import { nanoid } from 'nanoid';

export const componentList = [
  {
    fe_id: nanoid(),
    type: QuestionComponentsType.QuestionTitle,
    name: '标题',
    isHidden: false, // 是否隐藏
    isLocked: false, // 是否锁定
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
    isLocked: false, // 是否锁定
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
    isLocked: false, // 是否锁定
    props: {
      title: '爱好',
      placeholder: '请输入爱好',
      value: '打篮球',
    },
  },
];

export const pageInfo = {
  title: '问卷1',
  desc: '这是一个示例问卷',
  css: '',
  js: '',
  componentList,
};
