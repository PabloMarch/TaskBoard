import { useEffect, useCallback, useRef } from "react";
import { useEnhancedReducer, useImageUploader } from "@/lib";
import { Container } from "@/ui";
import reducer, {
  ADD_IMAGES,
  REMOVE_IMAGES,
  TOGGLE_COMPLETE
} from "./state";
import Task from "./Task";
import TaskHeader from "./TaskHeader";

const TasksBoard = ({ data = [] }) => {
  const currTaskIdRef = useRef(null);
  const [tasks, dispatch] = useEnhancedReducer(reducer, data);
  const [response, startUploader] = useImageUploader();
  const { images, error, loading } = response;

  // add images to the store when uploads are completed
  useEffect(
    () => {
      if (!images.length) return;
      dispatch({
        type: ADD_IMAGES,
        payload: {
          taskId: currTaskIdRef.current,
          // Saturn API only allow to upload one image per request
          images: [images[0]],
        }
      });
    },
    [images, dispatch]
  );

  // keeps a reference of the working task
  const setCurrTask = (id) => {
    currTaskIdRef.current = id;
  }

  // upload images to Saturn API
  const uploadImages = useCallback(
    (taskId, files) => {
      setCurrTask(taskId);
      startUploader(files);
    },
    [startUploader]
  );

  // remove images from store
  // TODO: remove from DB
  const removeImage = useCallback(
    (taskId, imgId) => {
      console.log("removeImage:: ", taskId, imgId);
      setCurrTask(taskId);
      dispatch({ type: REMOVE_IMAGES, payload: { taskId, imgId } });
    },
    [dispatch]
  );

  // toggle complete task status
  const toggleComplete = useCallback(
    (id) => {
      dispatch({
        type: TOGGLE_COMPLETE,
        payload: { id }
      });
    },
    [dispatch]
  );

  // just to check the renders
  console.log("RENDER:TasksBoard");

  return (
    <Container>
      <TaskHeader error={error} />
      {tasks.map(task => (
        <Task
          key={task.serverId}
          data={task}
          loading={loading && currTaskIdRef.current === task.serverId}
          disabled={loading}
          onAttachImages={uploadImages}
          onDetachImage={removeImage}
          onCompleteTask={toggleComplete}
        />
      ))}
    </Container>
  );
};

export default TasksBoard;