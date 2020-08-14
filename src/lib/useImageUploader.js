import { useCallback, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { UPLOAD_QUERY } from "@/config";
import useEnhancedReducer from "./useEnhancedReducer";

const initialState = {
  queue: {},
  images: [],
  loading: false,
  error: null
};

// UTILS
// format image raw file
const proccessImages = (files) => (
  files.map(
    (file) => {
      const name = uuidv4();
      const ext = file.name.substring(file.name.lastIndexOf('.'));
      return new File([file], `${name}${ext}`, { type: file.type })
    }
  )
);

// HOOK
const uploaderReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPLOADING":
      return {
        ...state,
        loading: true,
      }
    case "SET_QUEUE":
      return {
        ...state,
        loading: true,
        queue: payload.queue,
      }
    case "UPLOADED":
      return {
        ...state,
        images: [payload.image, ...state.images],
        queue: payload.queue
      };
    case 'ERROR':
      return {
        ...initialState,
        error: payload.error,
      }
    case 'END_QUEUE':
      return initialState;
    default:
      return state;
  }
};

const useImageUploader = () => {
  const [state, dispatch] = useEnhancedReducer(uploaderReducer, initialState);
  const { queue } = state;

  // add multiple images to the queue
  const startUpload = useCallback(
    (files) => {
      const arrFiles = Array.from(files);
      const queue = proccessImages(arrFiles);
      
      dispatch({
        type: "SET_QUEUE",
        payload: { queue }
      });
    },
    [dispatch]
  );

  // upload image to the API
  const uploadImage = useCallback(
    (file) => {
      dispatch({ type: "UPLOADING" });

      const newQueue = queue.filter(curr => curr.name !== file.name);
      const data = new FormData();
      data.append("file", file, uuidv4());

      // SIMULATE QUERY
      dispatch({
        type: "UPLOADED",
        payload: {
          image: {
            "id": uuidv4(),
            "content_type":"jpg",
            "metadata":null,
            "resource_url":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a.jpg",
            "size_urls":{
               "small":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a.jpg",
               "medium":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a@2x.jpg",
               "large":"https://cdn.joinsaturn.com/task-images/5fceac02-ec85-41bb-9796-c3c712d8127a@3x.jpg"
            }
          },
          queue: newQueue,
        } 
      });
      setTimeout(() => {
        if (newQueue.length < 1) dispatch({ type: "END_QUEUE" })
      }, 1000);
      return;
      // SIMULATE QUERY
      
      axios({ ...UPLOAD_QUERY, data })
        .then((res) => {
            dispatch({
              type: "UPLOADED",
              payload: {
                image: res.data,
                queue: newQueue,
              } 
            });

            // fire END_QUEUE action when no more images on queue
            if (newQueue.length < 1) {
              dispatch({ type: "END_QUEUE" });
            }
        })
        .catch((error) => dispatch({ type: "ERROR", payload: { error } }));
    },
    [queue, dispatch]
  );

  // starts processing the uploader queue
  // take the first file on the queue upload and remove
  useEffect(
    () => {
      if (!Object.keys(queue).length) return;
      // upload first positioned image on the queue
      uploadImage(queue[0]);
    },
    [queue, uploadImage]
  );

  return [state, startUpload];
};

export default useImageUploader;