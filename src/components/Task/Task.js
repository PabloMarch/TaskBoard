import { memo, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  useEnhancedReducer,
  useImageUploader,
  useLocalStorage,
  getStateFromLocalStorage,
} from "@/lib";
import {
  Button,
  Container,
  Cell,
  Image,
  Grid,
  Uploader
} from "@/ui";
import reducer, {
  ADD_IMAGES,
  REMOVE_IMAGE,
  TOGGLE_COMPLETE,
  LOAD_STORAGE
} from "./state";
import Slider from "../Slider";
import TaskHeader from "./TaskHeader";

// COMPONENT
const Task = memo(
  ({
    className,
    data,
    setNotification,
  }) => {
    const [task, dispatch] = useEnhancedReducer(reducer, data);
    const [response, startUploader] = useImageUploader();
    const { images: uploadedImages, error, loading } = response;
    // const [storedImage, storeTaskImages] = useLocalStorage(serverId, images);
    const {
      createdAt,
      images,
      isCompleted,
      serverId,
      title,
    } = task;

    // load cached images
    // const loadCachedImages = useCallback(
    //   (taskId, images) => {
    //     if (!images.length) return;
    //     dispatch({
    //       type: LOAD_STORAGE,
    //       payload: {
    //         taskId,
    //         images
    //       }
    //     });
    //   },
    //   [dispatch]
    // );

    // HANDLERS

    // mark task as complete
    const handleComplete  = useCallback(
      () => {
        dispatch({ type: TOGGLE_COMPLETE });
      },
      [dispatch]
    );

    // starts image uploader and load them on UI
    const handleImageUpload = (evt) => {
      const { files } = evt.target;
      startUploader(files);
    };

    // unattach image from task
    // TODO: remove from DB
    const handleImageRemove = (imgId) => {
      dispatch({
        type: REMOVE_IMAGE,
        payload: { imgId }
      });
    };
    
    // SIDE-EFFECTS
    
    // add uploaded images to the store when completed
    useEffect(
      () => {
        if (!uploadedImages.length) return;
        dispatch({
          type: ADD_IMAGES,
          // Saturn API only allow to one upload per request
          payload: { images: [uploadedImages[0]] } 
        });
      },
      [uploadedImages, dispatch]
    );

    // error callback
    useEffect(
      () => {
        setNotification(error);
      },
      [error, setNotification]
    );

    // load images from local storage when app loads
    // useEffect(
    //   () => {
    //     const cachedImages = getStateFromLocalStorage(serverId);
    //     if (!cachedImages) return;
    //     onLoadCachedImages(serverId, cachedImages);
    //   },
    //   [serverId, onLoadCachedImages]
    // );

    // store/remove image from localstorage when an image is updated
    // useEffect(
    //   () => {
    //     storeTaskImages(images);
    //   },
    //   [serverId, images, storedImage, storeTaskImages]
    // );

    // RENDER
    // just to check the renders
    console.log("RENDER:memo:Task:: ", serverId);

    return (
      <Container component="article" variant="card" className={className}>
        <Grid columns={12}>
          <Cell width={12}>
            <TaskHeader
              time={createdAt}
              headline={title}
              isCompleted={isCompleted}
              handleComplete={handleComplete}
            />
            <Slider className="slider">
              <Uploader
                onChange={handleImageUpload}
                loading={loading}
                disabled={loading}
                variant="photo"
              />
              {images.map(({ id, size_urls, resource_url }) => (
                <Container key={id} component="figure">
                  <Button
                    icon="close"
                    onClick={() => handleImageRemove(id)}
                  />
                  <Image src={size_urls?.small || resource_url} />
                </Container>
              ))}
            </Slider>
          </Cell>
        </Grid>
      </Container>
    );
  }
);

// STYLES
// TODO: remove nested classes reference
const StyledTask = styled(Task)`
  .header {
    align-items: flex-start;
    display: flex;
    padding-right: 45px;
    position: relative;

    h1 {
      margin-top: 0;
    }

    img {
      margin-right: 17px;
    }

    time {
      background-image: url("/images/icons/bell.svg");
      background-repeat: no-repeat;
      background-position: 10px 50%;
      padding-left: 30px;
    }

    label {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }

  .slider {
    /* TODO: remove dependency of .os-content */
    .os-content > label {
      margin: 8px 7px 0 0;
    }

    figure {
      position: relative;
      display: inline-flex;
      height: ${props => props.theme.box.mediumSize};
      margin: 0;
      min-width: ${props => props.theme.box.mediumSize};
      padding: 8px 7px 0 0;
    }

    button {
      position: absolute;
      top: 2px;
      right: 2px;
      transition-duration: ${props => props.theme.effects.transitionDuration};
      transform-origin: 50%;

      &:hover {
        transform: scale(1.2);
      }
    }

    img {
      border-radius: ${props => props.theme.box.borderRadiusDense};
      display: block;
      height: ${props => props.theme.box.mediumSize};
      width: ${props => props.theme.box.mediumSize};
    }

  }
`;

export default StyledTask;