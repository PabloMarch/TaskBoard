import { memo } from "react";
import { Typography } from "@/ui";

// COMPONENT
// example use of memo() when the component almost never change
const MemoizedTaskHeader = memo(
  ({ error }) => (
    <>
      <Typography component="h1" screenReader>Images Task Board</Typography>
      {error && (
        <Typography component="label" error>
          There was an error uploading your image
        </Typography>
      )}
    </>
  )
);

export default MemoizedTaskHeader;