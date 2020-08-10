import { memo } from "react";
import {
  Container,
  Cell,
  Date,
  Image,
  Input,
  Grid,
  Typography,
  Uploader
} from "@/ui";
import Slider from "../Slider";

const Task = memo(
  ({ data, disabled, loading, onAttachImages, onCompleteTask }) => {
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
      <Container component="article" variant="card" className="Task">
        <Grid columns={12}>
          <Cell width={12}>
            <Container component="header">
              <Typography component="h1" itemProp="headline">{title}</Typography>
              <Date time={createdAt} itemProp="dateCreated" />
              <Input
                type="radio"
                checked={isCompleted}
                onClick={handleComplete}
                readOnly
              />
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

export default Task;