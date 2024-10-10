import React from "react";
import { Input as AntInput } from "antd";
import styled from "styled-components";

const StyledInput = styled(AntInput)`
  margin-bottom: 20px;
`;

export const Input: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
}> = ({ value, onChange, onEnter }) => (
  <StyledInput
    placeholder="What needs to be done?"
    value={value}
    onChange={onChange}
    onPressEnter={onEnter}
  />
);
