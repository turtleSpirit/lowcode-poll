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

// export type FromValueInput = {
//   name: string;
// }&{
//   [K in keyof QuestionInputProps]?: QuestionInputProps[K];
// };

export type FromValueInfo = {
  name: string;
  title?: string;
  desc?: string;
};

export const QuestionInfoDefaultProps: QuestionInfoProps = {
  title: '标题',
  desc: '描述',
};
