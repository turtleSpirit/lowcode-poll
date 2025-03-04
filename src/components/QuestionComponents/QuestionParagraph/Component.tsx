import React, { FC } from 'react';
import { Typography } from 'antd';

import { QuestionParaGraphDefaultProps, QuestionParaGraphProps } from './interface';

const { Paragraph } = Typography;

const QuestionInput: FC<QuestionParaGraphProps> = props => {
  const { text = '', isCenter } = { ...QuestionParaGraphDefaultProps, ...props };
  // 尽量不要使用 dangerouslySetInnerHTML ，不安全  尽量使用文本
  const textList = text.split('\n'); // 例如 ['hello', '123', '456']
  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0' }}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </Paragraph>
  );
};
export default QuestionInput;
