import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useState } from "react";
import Pets from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { DarkMode, Notifications } from "@mui/icons-material";
//import { Search } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = ({mode,setMode}) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Sonal Chandra
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search >
          <InputBase sx = {{color:"black"}} placeholder="Search...." />
        </Search>
        <Icons>
          {/* somehow make this a dark mode button */}
          <IconButton onClick={e=>setMode(mode === "light" ? "dark" : "light")} color="#FFFFFF" aria-label="add an alarm">
            <DarkModeIcon />
          </IconButton>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Pizza boi"
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Pizza boi"
            onClick={(e) => setOpen(true)}
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dpizza%2Bcartoon&psig=AOvVaw0dHjTSfviFhz53LRrSpr71&ust=1689937276504000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPi9uYyRnYADFQAAAAAdAAAAABAE"
          />
          <Typography variant="span" onClick={(e) => setOpen(true)}>
            {" "}
            Dash{" "}
          </Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
