import { ReactNode } from 'react';
import { PageContainer } from './StyledMainTemplate';

type Props = {
  children: ReactNode;
}

export const MainTemplate= ({ children }: Props) : JSX.Element => (
  <PageContainer>{children}</PageContainer>
);

