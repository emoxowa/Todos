import { List } from "antd";
import styled from "styled-components";

export const ItemText = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: white;
  text-align: start;
`;

export const StyledItem = styled(List.Item)`
  width: 500px;
`;
