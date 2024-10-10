import React from "react";
import { Checkbox as AntCheckbox } from "antd";

export const Checkbox: React.FC<{ checked: boolean; onChange: () => void }> = ({
  checked,
  onChange,
}) => <AntCheckbox checked={checked} onChange={onChange} />;
