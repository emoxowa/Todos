import {
  FooterContainer,
  StyledSegmented,
  TaskCount,
} from "./StyledTodoFooter";
import { Button, Flex, Modal } from "antd";
import { FilterType, useModal } from "hooks";
import { getItemText } from "utils";

type Props = {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  clearCompleted: () => void;
  remainingCount: number;
};

export const TodoFooter = ({
  activeFilter,
  setActiveFilter,
  clearCompleted,
  remainingCount,
}: Props): JSX.Element => {
  const { isModalOpen, showModal, handleOk, handleCancel } =
    useModal(clearCompleted);

  return (
    <>
      <FooterContainer>
        <TaskCount>{getItemText(remainingCount)}</TaskCount>

        <StyledSegmented
          options={["All", "Active", "Completed"]}
          value={activeFilter}
          onChange={(value) => setActiveFilter(value as FilterType)}
        />

        <Button type="primary" onClick={showModal}>
          Clear completed
        </Button>
      </FooterContainer>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, clear"
        cancelText="No, cancel"
        centered
      >
        <Flex vertical align="center">
          <p>Are you sure you want to clear all completed tasks?</p>
          <img
            src="https://media.tenor.com/vMVIvalg1HEAAAAi/cat-meme.gif"
            width={100}
          />
        </Flex>
      </Modal>
    </>
  );
};
