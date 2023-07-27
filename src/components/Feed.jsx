import { Box } from "@mui/material";
import * as React from "react";
import { Post } from "./Post";



export const Feed = () => {
  return (
    <Box
      flex={4}
      p={2}
      display="flex"
      flexDirection="column"
      gap="20px"
    >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  );
};
