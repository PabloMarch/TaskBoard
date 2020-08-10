import { memo } from "react";
import styled from "styled-components";
import {
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
  ({ className, data, disabled, loading, onAttachImages, onCompleteTask }) => {
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

            <Slider>
              <Uploader
                onChange={handleImageUpload}
                loading={loading}
                disabled={disabled}
                variant="photo"
              />
              {images.map(({ id, size_urls, resource_url }) => (
                <Container key={id} component="figure">
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
      background-image: url("/images/bell.svg");
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
`;

export default StyledTask;