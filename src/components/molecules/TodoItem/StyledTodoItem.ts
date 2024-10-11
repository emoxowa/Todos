import { List } from "antd";
import styled from "styled-components";

export const ItemText = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: white;
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

