export interface QuestionParaGraphProps {
  text?: string;
  isCenter?: boolean;
}

export type ParaGraphPropsType = {
  name: string;
  prop: QuestionParaGraphProps;
  onChange?: (params: FromValueParaGraph) => void;
  disabled?: boolean;
};

// export type FromValueInput = {
//   name: string;
// }&{
//   [K in keyof QuestionInputProps]?: QuestionInputProps[K];
// };

export type FromValueParaGraph = {
  name: string;
  title?: string;
  placeholder?: string;
  value?: string;
};

export const QuestionParaGraphDefaultProps: QuestionParaGraphProps = {
  text: '段落内容',
  isCenter: false,
};
