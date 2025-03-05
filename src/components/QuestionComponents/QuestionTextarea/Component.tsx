import React, { FC } from 'react';
import { Typography, Input } from 'antd';

import { QuestionInputDefaultProps } from './interface';

import type { QuestionTextareaProps } from './interface';

const { Paragraph } = Typography;
const { TextArea } = Input;

const QuestionInput: FC<QuestionTextareaProps> = props => {
  const { title, placeholder, value } = { ...QuestionInputDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder} value={value}></TextArea>
      </div>
    </div>
  );
};
export default QuestionInput;
