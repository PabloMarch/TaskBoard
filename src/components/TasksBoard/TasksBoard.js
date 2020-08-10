import { useEffect, useCallback, useRef } from "react";
import { useEnhancedReducer, useImageUploader } from "@/lib";
import { Container } from "@/ui";
import reducer, {
  ADD_IMAGES,
  REMOVE_IMAGE,
  TOGGLE_COMPLETE,
  LOAD_STORAGE
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

  // load cached images
  const loadCachedImages = useCallback(
    (taskId, images) => {
      if (!images.length) return;
      dispatch({
        type: LOAD_STORAGE,
        payload: {
          taskId,
          images
        }
      });
    },
    [dispatch]
  );

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
      setCurrTask(taskId);
      dispatch({ type: REMOVE_IMAGE, payload: { taskId, imgId } });
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
  // console.log("RENDER:TasksBoard");

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
          onLoadCachedImages={loadCachedImages}
          onDetachImage={removeImage}
          onCompleteTask={toggleComplete}
        />
      ))}
    </Container>
  );
};

export default TasksBoard;