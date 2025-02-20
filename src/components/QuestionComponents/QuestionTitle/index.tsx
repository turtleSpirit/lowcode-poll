import React, { FC } from 'react';
import { Typography } from 'antd';

import { QuestionTitleDefaultProps } from './interface';

import type { QuestionTitleProps } from './interface';

const { Title } = Typography;
const QuestionTitle: FC<QuestionTitleProps> = props => {
  const { text, level, isCenter } = { ...QuestionTitleDefaultProps, ...props };
  return (
    <Title level={level} style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: 0 }}>
      {text}
    </Title>
  );
};
export default QuestionTitle;
