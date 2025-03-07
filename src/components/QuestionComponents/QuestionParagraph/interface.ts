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

export type FromValueParaGraph = {
  name: string;
} & {
  [K in keyof QuestionParaGraphProps]?: QuestionParaGraphProps[K];
};

export const QuestionParaGraphDefaultProps: QuestionParaGraphProps = {
  text: '段落内容',
  isCenter: false,
};
