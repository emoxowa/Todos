import { ReactNode } from "react";
import { StyledButton } from './StyledButton';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: Props): JSX.Element => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
