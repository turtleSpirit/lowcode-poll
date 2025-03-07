export interface QuestionInfoProps {
  title?: string;
  desc?: string;
}

export type InfoPropsType = {
  name: string;
  prop: QuestionInfoProps;
  onChange?: (params: FromValueInfo) => void;
  disabled?: boolean;
};

export type FromValueInfo = {
  name: string;
} & {
  [K in keyof QuestionInfoProps]?: QuestionInfoProps[K];
};

export const QuestionInfoDefaultProps: QuestionInfoProps = {
  title: '标题',
  desc: '描述',
};
