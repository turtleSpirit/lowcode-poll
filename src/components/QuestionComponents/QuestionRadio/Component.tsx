import React, { FC } from 'react';
import { Typography, Radio, Space } from 'antd';

import { QuestionRadioDefaultProps } from './interface';

import type { QuestionRadioProps } from './interface';

const { Paragraph } = Typography;
const QuestionTitle: FC<QuestionRadioProps> = props => {
  const { title, isVertical, options = [], value } = { ...QuestionRadioDefaultProps, ...props };
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options.map(opt => {
            const { value, text } = opt;
            return (
              <Radio key={value} value={value}>
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};
export default QuestionTitle;
