import React, { FC } from 'react';
import { Typography } from 'antd';

import { QuestionInfoDefaultProps, QuestionInfoProps } from './interface';

const { Paragraph, Title } = Typography;

const QuestionInfo: FC<QuestionInfoProps> = props => {
  const { title, desc = '' } = { ...QuestionInfoDefaultProps, ...props };
  // 尽量不要使用 dangerouslySetInnerHTML ，不安全  尽量使用文本
  const descTextList = desc.split('\n'); // 例如 ['hello', '123', '456']
  return (
    <div style={{ textAlign: 'center' }}>
      <Title style={{ fontSize: '24px' }}>{title}</Title>
      <Paragraph>
        {descTextList.map((t, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        ))}
      </Paragraph>
    </div>
  );
};
export default QuestionInfo;
