import React, { FC } from 'react';
import { Typography, Input } from 'antd';

import { QuestionInputDefaultProps } from './interface';

import type { QuestionInputProps } from './interface';

const { Paragraph } = Typography;

const QuestionInput: FC<QuestionInputProps> = props => {
  const { title, placeholder, value } = { ...QuestionInputDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder} value={value}></Input>
      </div>
    </div>
  );
};
export default QuestionInput;
