import styled from "styled-components";

export const ItemText = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
