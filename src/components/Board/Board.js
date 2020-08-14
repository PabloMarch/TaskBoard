import { useState } from "react";
import { Container } from "@/ui";
import Task from "../Task/Task";
import TaskHeader from "./BoardHeader";

const Board = ({ data = [] }) => {
  const [notification, setNotification] = useState(null);

  // RENDER

  // just to check the renders
  console.log("RENDER::Board");

  return (
    <Container variant="wrapper">
      <TaskHeader error={notification} />
      {data.map(task => (
        <Task
          key={task.serverId}
          data={task}
          setNotification={setNotification}
        />
      ))}
    </Container>
  );
};

export default Board;