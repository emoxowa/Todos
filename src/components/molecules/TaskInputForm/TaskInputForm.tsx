import { Button, Input } from "components/atoms";
import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskInputForm: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
}> = ({ value, onChange, onAddTask }) => (
  <FormContainer>
    <Input value={value} onChange={onChange} onEnter={onAddTask} />
    <Button onClick={onAddTask}>Add</Button>
  </FormContainer>
);
