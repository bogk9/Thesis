import {
  Box,
  Collapse,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import React, { useEffect } from "react";
import { useMatch } from "react-router-dom";
import { useState } from "react";
import {
  getWorkgroups,
  switchWorkgroup,
} from "../../../redux/actions/workgroups";
import { Navigate, useNavigate } from "react-router-dom";
import { usePageStatus } from "./pages";
import { PAGES, PAGES_SECONDARY } from "./pages";
import {
  CurrentUserContainer,
  MaterialUISwitch,
  LogoWrapper,
  NewBadge,
  NewBadgeText,
  SideBarItem,
  SidebarSectionText,
  SideBarSubItem,
} from "./sidebar.styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { switchMode } from "../../../redux/actions/theme";

const CollapsingList = ({ name, subpages }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <SideBarItem onClick={handleOpen}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography color="text.primary">{name}</Typography>{" "}
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </SideBarItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
          }}
        >
          {subpages.map((subpage) => (
            <SideBarSubItem key={subpage} button>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary={subpage} />
            </SideBarSubItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const PageItem = ({ page, subpages }) => {
  const navigate = useNavigate();
  const { label, route, icon, options } = usePageStatus(page);
  const isActive = useMatch(route);
  return (
    <SideBarItem selected={Boolean(isActive)} onClick={() => navigate(route)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>
        <Typography color="text.primary">{label}</Typography>
      </ListItemText>
      {options?.new && (
        <NewBadge>
          <NewBadgeText>New</NewBadgeText>
        </NewBadge>
      )}
    </SideBarItem>
  );
};

const GroupPicker = ({
  workgroups,
  currentWorkgroup,
  handleWorkgroupChange,
}) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentWorkgroup?._id || ""}
        InputLabelProps={{ shrink: false }}
        onChange={(event) => handleWorkgroupChange(event.target.value)}
        sx={{
          borderRadius: 4,
        }}
      >
        {workgroups?.map?.((workgroup) => (
          <MenuItem key={workgroup._id} value={workgroup._id}>
            {workgroup.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const Sidebar = () => {
  const workgroups = useSelector((state) => state.workgroups.data);
  const currentWorkgroup = useSelector(
    (state) => state.workgroups.currentWorkgroup
  );
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleWorkgroupChange = (workgroupId) => {
    dispatch(switchWorkgroup(workgroupId));
  };

  useEffect(() => {
    dispatch(getWorkgroups(user.token));
  }, [user]);

  return (
    <Box
      sx={{ position: "fixed", width: "100%", maxWidth: "20vw", zIndex: "10" }}
    >
      <LogoWrapper>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          color="text.primary"
          sx={{
            mr: 2,
            fontWeight: 900,
            letterSpacing: ".1rem",
            textDecoration: "none",
          }}
        >
          StudentShare
        </Typography>
        <MaterialUISwitch
          onClick={() =>
            dispatch(mode == "dark" ? switchMode("light") : switchMode("dark"))
          }
        />
      </LogoWrapper>
      <Box>
        <SidebarSectionText>Main menu</SidebarSectionText>
      </Box>
      <Box>
        <List>
          {PAGES.map((page) => (
            <PageItem key={page} page={page}></PageItem>
          ))}
          <CollapsingList
            name="My classes"
            subpages={[
              "test",
              "testfdsfsdf",
              "xdxdxd",
              "sfsdfd",
              "gdgfdgad",
              "fsdfs",
            ]}
          />
        </List>
      </Box>
      <Box mr={3} ml={3}>
        <Divider />
      </Box>
      <Box mt={2}>
        <SidebarSectionText>Current workgroup</SidebarSectionText>
      </Box>
      <Box ml={2} mr={2} mt={1}>
        <GroupPicker
          workgroups={workgroups}
          currentWorkgroup={currentWorkgroup}
          handleWorkgroupChange={handleWorkgroupChange}
        />
      </Box>
      <Box>
        {PAGES_SECONDARY.map((page) => (
          <PageItem page={page} />
        ))}
      </Box>
      <Box mr={3} ml={3}>
        <Divider />
      </Box>
      <Box mt={2}>
        <SidebarSectionText>Current user</SidebarSectionText>
      </Box>
      <Box ml={2} mr={2}>
        <CurrentUserContainer>
          <IconButton>
            <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Button onClick={() => navigate("/profile")}>Settings</Button>
          <Button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Sign-out
          </Button>
        </CurrentUserContainer>
      </Box>
    </Box>
  );
};

export default Sidebar;
