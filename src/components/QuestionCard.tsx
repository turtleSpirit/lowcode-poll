import React, { FC } from 'react';
import { Button, Space, Divider, Tag } from 'antd';
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

import styles from '@/assets/styles/components/QuestionCard.module.scss';

type PropsType = {
  _id: string;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props;
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Button type="text" size="small" icon={<StarOutlined />}>
            {isStar ? '取消标星' : '标星'}
          </Button>
          <Button type="text" size="small" icon={<CopyOutlined />}>
            复制
          </Button>
          <Button type="text" size="small" icon={<DeleteOutlined />}>
            删除
          </Button>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
