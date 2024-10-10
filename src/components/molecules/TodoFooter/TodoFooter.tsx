import { useState } from "react";
import {
  FooterContainer,
  StyledSegmented,
  TaskCount,
} from "./StyledTodoFooter";
import { Button, Modal } from "antd";

type Props = {
  activeFilter: "All" | "Active" | "Completed";
  setActiveFilter: (filter: "All" | "Active" | "Completed") => void;
  clearCompleted: () => void;
  remainingCount: number;
};

export const TodoFooter = ({
  activeFilter,
  setActiveFilter,
  clearCompleted,
  remainingCount,
}: Props): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    clearCompleted();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getItemText = (count: number) => {
    if (count === 0) return "No items left";
    return `${count} ${count === 1 ? "item" : "items"} left`;
  };

  return (
    <>
      <FooterContainer>
        <TaskCount>{getItemText(remainingCount)}</TaskCount>

        <StyledSegmented
          options={["All", "Active", "Completed"]}
          value={activeFilter}
          onChange={(value) =>
            setActiveFilter(value as "All" | "Active" | "Completed")
          }
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Are you sure you want to clear all completed tasks?</p>
          <img
            src="https://media.tenor.com/vMVIvalg1HEAAAAi/cat-meme.gif"
            width={100}
          />
        </div>
      </Modal>
    </>
  );
};
