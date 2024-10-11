import { Empty, List } from "antd";
import styled from "styled-components";

export const StyledEmpty = styled(Empty)`
  min-height: 200px;

  .ant-empty-description {
    color: white;
    font-size: 12px;
    min-width: 300px;
  }
`;

export const StyledList = styled(List)`
  min-height: 200px;
  width: 100%;
`;
