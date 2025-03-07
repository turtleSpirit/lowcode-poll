export interface QuestionTitleProps {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
}

export type TitlePropsType = {
  name: string;
  prop: QuestionTitleProps;
  onChange?: (params: FromValueTitle) => void;
  disabled?: boolean;
};

export type FromValueTitle = {
  name: string;
} & {
  [K in keyof QuestionTitleProps]?: QuestionTitleProps[K];
};

export const QuestionTitleDefaultProps: QuestionTitleProps = {
  text: '一行标题',
  level: 1,
  isCenter: false,
};
