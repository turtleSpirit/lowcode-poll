export interface QuestionInputProps {
  title?: string;
  placeholder?: string;
  value?: string;
}

export type InputPropsType = {
  name: string;
  prop: QuestionInputProps;
  onChange?: (params: FromValueInput) => void;
};

// export type FromValueInput = {
//   name: string;
// }&{
//   [K in keyof QuestionInputProps]?: QuestionInputProps[K];
// };

export type FromValueInput = {
  name: string;
  title?: string;
  placeholder?: string;
  value?: string;
};

export const QuestionInputDefaultProps: QuestionInputProps = {
  title: '输入框标题',
  placeholder: '请输入内容',
  value: '',
};
