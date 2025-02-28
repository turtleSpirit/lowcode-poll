export interface QuestionInputProps {
  title?: string;
  placeholder?: string;
}

export type InputPropsType = {
  prop: QuestionInputProps;
  name: string;
};

export const QuestionInputDefaultProps: QuestionInputProps = {
  title: '输入框标题',
  placeholder: '请输入内容',
};
