import { Checkbox } from "components/atoms";
import { Container, ItemText, StyledItem } from "./StyledTodoItem";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Todo } from 'hooks';

type Props = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

export const TodoItem = ({ todo, onToggle, onDelete }: Props): JSX.Element => (
  <StyledItem>
    <Container>
      <Checkbox checked={todo.completed} onChange={onToggle} />
      <ItemText completed={todo.completed}>{todo.text}</ItemText>
    </Container>
    <Button
      type="primary"
      shape="circle"
      onClick={onDelete}
      size="small"
      icon={<DeleteOutlined />}
    />
  </StyledItem>
);
