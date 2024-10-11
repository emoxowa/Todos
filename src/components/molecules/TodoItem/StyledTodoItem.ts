import { List } from "antd";
import styled from "styled-components";

export const ItemText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#a3a4a8" : "white")};
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
`;

export const StyledItem = styled(List.Item)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  flex-wrap: nowrap !important;
`;

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
`;

