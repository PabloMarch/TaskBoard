import { memo } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Cell,
  Time,
  Image,
  Input,
  Grid,
  Typography,
  Uploader
} from "@/ui";
import Slider from "../Slider";

// COMPONENT
const Task = memo(
  ({
    className,
    data,
    disabled,
    loading,
    onAttachImages,
    onDetachImage,
    onCompleteTask,
  }) => {
    const {
      createdAt,
      images,
      isCompleted,
      serverId,
      title,
    } = data;

    // mark task as complete
    const handleComplete  = () => {
      onCompleteTask(serverId);
    };

    // starts image uploader and load them on UI
    const handleImageUpload = (evt) => {
      const { files } = evt.target;
      onAttachImages(serverId, files);
    };

    // unattach image from task
    // TODO: remove from DB
    const handleImageRemove = (imgId) => {
      onDetachImage(serverId, imgId);
    };

    // just to check the renders
    console.log("RENDER:Task:: ", serverId);

    return (
      <Container component="article" variant="card" className={className}>
        <Grid columns={12}>
          <Cell width={12}>
            <Container component="header" className="header">
              <Image alt="Task Detail" src="/images/computer.svg" />
              <Container>
                <Typography component="h1" itemProp="headline">{title}</Typography>
                <Time time={createdAt} itemProp="dateCreated" />
                <Input
                  type="radio"
                  checked={isCompleted}
                  onClick={handleComplete}
                  readOnly
                />
              </Container>
            </Container>

            <Slider className="slider">
              <Uploader
                onChange={handleImageUpload}
                loading={loading}
                disabled={disabled}
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
    display: flex;
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