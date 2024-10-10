import { Input } from "components/atoms";
import React from "react";
import { FormContainer } from './StyledTaskInputForm';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
};


export const TaskInputForm = ({ value, onChange, onAddTask }: Props): JSX.Element => (
  <FormContainer>
    <Input value={value} onChange={onChange} onEnter={onAddTask} />
    <Button type="primary" onClick={onAddTask} icon={<PlusOutlined />}>
      Add
    </Button>
  </FormContainer>
);
