export type OptionType = {
  value: string;
  text: string;
};
export interface QuestionRadioProps {
  title?: string;
  isVertical?: boolean;
  options?: OptionType[];
  value?: string;
}

export type RadioPropsType = {
  name: string;
  prop: QuestionRadioProps;
  onChange?: (params: FromValueRadio) => void;
  disabled?: boolean;
};

// export type FromValueTitle = {
//   name: string;
// }&{
//   [K in keyof QuestionTitleProps]?: QuestionTitleProps[K];
// };

export type FromValueRadio = {
  name: string;
  title?: string;
  isVertical?: boolean;
  options?: OptionType[];
  value?: string;
};

export const QuestionRadioDefaultProps: QuestionRadioProps = {
  title: '单选标题',
  isVertical: false,
  options: [
    { value: 'item1', text: '选项1' },
    { value: 'item2', text: '选项2' },
    { value: 'item3', text: '选项3' },
  ],
  value: '',
};
