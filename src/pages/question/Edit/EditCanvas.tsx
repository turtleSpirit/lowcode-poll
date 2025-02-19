import React, { FC } from 'react';

import QuestionInput from '@/components/QuestionComponents/QuestionInput';
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle';

const EditCanvas: FC = () => {
  return (
    <div>
      <div>
        <div>
          <QuestionTitle />
        </div>
      </div>
      <div>
        <div>
          <QuestionInput />
        </div>
      </div>
    </div>
  );
};

export default EditCanvas;
