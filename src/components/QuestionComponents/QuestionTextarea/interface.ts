export interface QuestionTextareaProps {
  title?: string;
  placeholder?: string;
  value?: string;
}

export type TextareaPropsType = {
  name: string;
  prop: QuestionTextareaProps;
  onChange?: (params: FromValueTextarea) => void;
  disabled?: boolean;
};

// export type FromValueInput = {
//   name: string;
// }&{
//   [K in keyof QuestionInputProps]?: QuestionInputProps[K];
// };

export type FromValueTextarea = {
  name: string;
  title?: string;
  placeholder?: string;
  value?: string;
};

export const QuestionInputDefaultProps: QuestionTextareaProps = {
  title: '多行输入框标题',
  placeholder: '请输入内容',
  value: '',
};
