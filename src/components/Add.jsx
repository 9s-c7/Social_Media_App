import {
  Stack,
  Button,
  Fab,
  Modal,
  Tooltip,
  Box,
  Typography,
  Avatar,
  Input,
  TextField,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  color:"text.primary",
};

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <Tooltip
          title="Add"
          sx={{
            position: "fixed",
            top: "92vh",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Fab
            variant="extended"
            sx={{
              backgroundColor: "#1760a5",
              color: "white",
              "&:hover": { color: "#1760a5" },
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            Add New Post
          </Fab>
        </Tooltip>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Create New Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <UserBox>
              <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                Dash
              </Typography>
            </UserBox>
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Whats on your mind?"
            variant="standard"
          />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{m:"20px 10px"}}
          >
            <EmojiEmotions color="primary" />
            <Image color="primary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};
