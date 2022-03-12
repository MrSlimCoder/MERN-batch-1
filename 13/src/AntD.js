import React from 'react';
import { Button } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Steps } from 'antd';
import './AntD.css';

const { Step } = Steps;

const AntD = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <StarOutlined />
    <StarFilled />
    <StarTwoTone twoToneColor="#eb2f96" />

    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </div>
);

export default AntD;