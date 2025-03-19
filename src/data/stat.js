import { componentList } from './question';
import Mock from 'mockjs';

import { QuestionComponentsType } from '@/constant/question';

const Random = Mock.Random;

export const getStatList = (len = 10) => {
  const res = [];
  for (let i = 0; i < len; i++) {
    // 一个用户的答卷
    const stat = {
      _id: Random.id(),
    };

    // 增加各个组件的 id value
    componentList.forEach(c => {
      const { fe_id, type, props } = c;

      switch (type) {
        case QuestionComponentsType.QuestionInput:
          stat[fe_id] = Random.ctitle();
          break;
        case QuestionComponentsType.QuestionTextarea:
          stat[fe_id] = Random.ctitle();
          break;
        case QuestionComponentsType.QuestionRadio:
          stat[fe_id] = props.options[0].text;
          break;
        case QuestionComponentsType.QuestionCheckboxes:
          stat[fe_id] = `${props.list[0].text},${props.list[1].text}`;
          break;
      }
    });
    res.push(stat);
  }

  return res;
};
