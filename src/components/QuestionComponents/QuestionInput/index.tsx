import React, { FC } from 'react';
import { Typography, Input } from 'antd';

import { QuestionInputDefaultProps } from './interface';

import type { QuestionInputProps } from './interface';

const { Paragraph } = Typography;

const QuestionInput: FC<QuestionInputProps> = props => {
  const { title, placeholder } = { ...QuestionInputDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  );
};
export default QuestionInput;
