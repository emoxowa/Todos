import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";

const StyledButton = styled(AntButton)`
  margin-left: 10px;
`;

export const Button: React.FC<{ onClick: () => void }> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
