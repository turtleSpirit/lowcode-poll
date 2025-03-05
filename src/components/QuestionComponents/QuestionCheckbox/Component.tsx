import React, { FC } from 'react';
import { Typography, Checkbox, Space } from 'antd';

import { QuestionCheckboxDefaultProps } from './interface';

import type { QuestionCheckboxProps } from './interface';

const { Paragraph } = Typography;
const QuestionTitle: FC<QuestionCheckboxProps> = props => {
  const { title, isVertical, list = [] } = { ...QuestionCheckboxDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {list.map(opt => {
          const { value, text, checked } = opt;
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {text}
            </Checkbox>
          );
        })}
      </Space>
    </div>
  );
};
export default QuestionTitle;
