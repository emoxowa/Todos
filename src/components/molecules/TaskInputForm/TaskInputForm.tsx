import { Button, Input } from "components/atoms";
import React from "react";
import { FormContainer } from './StyledTaskInputForm';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
};


export const TaskInputForm = ({ value, onChange, onAddTask }: Props): JSX.Element => (
  <FormContainer>
    <Input value={value} onChange={onChange} onEnter={onAddTask} />
    <Button onClick={onAddTask}>Add</Button>
  </FormContainer>
);
