import { Segmented } from "antd";
import { Breakpoints } from "constants/breakpoints";
import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #e6e6e6;
  width: 100%;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${Breakpoints.MD}px) {
    flex-direction: row;
  }
`;

export const TaskCount = styled.span`
  font-size: 12px;
  color: white;
`;

export const StyledSegmented = styled(Segmented)`
  background-color: transparent;
  color: white;
`;
