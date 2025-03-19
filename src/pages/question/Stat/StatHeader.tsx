import React, { FC, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Typography, Space, Input, Tooltip, InputRef, message, Popover } from 'antd';
import { LeftOutlined, CopyOutlined, QrcodeOutlined } from '@ant-design/icons';
import { QRCodeSVG } from 'qrcode.react';

import styles from '@/assets/styles/pages/stat/StatHeader.module.scss';
import { pageInfo } from '@/data/question';

const { Title } = Typography;

const StatHeader: FC = () => {
  const nav = useNavigate();
  const { title, isPublished } = pageInfo;
  const { id } = useParams();

  const inputRef = useRef<InputRef>(null);
  function copy() {
    const ele = inputRef.current?.input;
    if (ele) {
      ele.select();
      document.execCommand('copy');
      message.success('复制成功');
    }
  }

  function getLinkAndQRcodeEle() {
    if (!isPublished) return null;

    // 拼接url，需要参考c端的规则
    const url = `http://localhost:3000/questions/${id}`;

    const QRcodeEle = (
      <div style={{ textAlign: 'center' }}>
        <QRCodeSVG value={url} size={150}></QRCodeSVG>
      </div>
    );
    return (
      <Space>
        <Input value={url} style={{ width: '300px' }} ref={inputRef}></Input>
        <Tooltip title="复制链接">
          <Button icon={<CopyOutlined />} onClick={copy}></Button>
        </Tooltip>
        <Popover content={QRcodeEle}>
          <Button icon={<QrcodeOutlined />}></Button>
        </Popover>
      </Space>
    );
  }
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title style={{ marginTop: 0 }}>{title}</Title>
          </Space>
        </div>
        <div className={styles.main}>{getLinkAndQRcodeEle()}</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => nav(`/question/edit/${id}`)}>
            编辑问卷
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatHeader;
