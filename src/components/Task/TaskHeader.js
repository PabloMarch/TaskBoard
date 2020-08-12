import { memo } from "react";
import {
  Container,
  Time,
  Image,
  Input,
  Typography,
} from "@/ui";

const TaskHeader = memo(
  ({ headline, time, isCompleted, handleComplete }) => (
    <Container component="header" className="header">
      {console.log("RENDER::memo:TaskHeader")}
      <Image alt="Task Detail" src="/images/computer.svg" />
      <Container>
        <Typography component="h1" itemProp="headline">{headline}</Typography>
        <Time time={time} itemProp="dateCreated" />
        <Input
          type="radio"
          checked={isCompleted}
          onClick={handleComplete}
          readOnly
        />
      </Container>
    </Container>
  )
);

export default TaskHeader;