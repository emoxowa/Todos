import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MainTemplate= ({ children }) : JSX.Element => (
  <PageContainer>{children}</PageContainer>
);

