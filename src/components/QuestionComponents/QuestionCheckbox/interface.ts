export type OptionType = {
  value: string;
  text: string;
  checked: boolean;
};
export interface QuestionCheckboxProps {
  title?: string;
  isVertical?: boolean;
  list?: OptionType[];
}

export type CheckboxPropsType = {
  name: string;
  prop: QuestionCheckboxProps;
  onChange?: (params: FromValueCheckbox) => void;
  disabled?: boolean;
};

// export type FromValueTitle = {
//   name: string;
// }&{
//   [K in keyof QuestionTitleProps]?: QuestionTitleProps[K];
// };

export type FromValueCheckbox = {
  name: string;
  title?: string;
  isVertical?: boolean;
  list?: OptionType[];
  value?: string;
};

export const QuestionCheckboxDefaultProps: QuestionCheckboxProps = {
  title: '多选标题',
  isVertical: false,
  list: [
    { value: 'item1', text: '选项1', checked: false },
    { value: 'item2', text: '选项2', checked: false },
    { value: 'item3', text: '选项3', checked: false },
  ],
};
