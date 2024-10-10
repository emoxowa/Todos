import React from "react";
import { StyledInput } from './StyledInput';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: () => void;
};

export const Input = ({ value, onChange, onEnter }: Props): JSX.Element => (
  <StyledInput
    placeholder="What needs to be done?"
    value={value}
    onChange={onChange}
    onPressEnter={onEnter}
  />
);
