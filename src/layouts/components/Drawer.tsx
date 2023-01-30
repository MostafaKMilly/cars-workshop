import {
  CSSObject,
  Theme,
  Drawer as MuiDrawer,
  styled,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@/assets/icons/menuIcon.svg";
import { useState } from "react";
import { DrawerList } from "./DrawerList";
import { useDrawerNavs } from "../hooks/useDrawerNavs";
import { DrawerListItem } from "./DrawerListItem";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { useSignout } from "@/shared/hooks/useSignout";

const drawerWidth = 330;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  position: "inherit",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  position: "inherit",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 80,
  [theme.breakpoints.up("sm")]: {
    width: 100,
  },
});

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  boxShadow: theme.shadows[1],
  borderRadius: "0px 50px 50px 0px",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Drawer = () => {
  const [open, setOpen] = useState(false);
  const navs = useDrawerNavs();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const signout = useSignout();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledDrawer
      open={open}
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "common.black",
        },
      }}
    >
      <Box display="flex" justifyContent={open ? "space-between" : "end"} p={2}>
        {open && <LanguageSelect />}
        <IconButton onClick={handleToggle}>
          <img src={MenuIcon} alt="MenuIcon" />
        </IconButton>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        height="100%"
        overflow="hidden"
      >
        <img
          src={open ? "/logo.svg" : "/smallLogo.svg"}
          alt="logo"
          width={open ? 240 : 83}
        />
        <DrawerList>
          {navs.map((nav) => (
            <DrawerListItem
              isDrawerOpen={open}
              key={nav.link}
              icon={nav.icon}
              text={nav.text}
              active={pathname === nav.link}
              onClick={() => navigate(nav.link)}
            />
          ))}
          {open && (
            <Button onClick={signout} sx={{ mx: 3 }}>
              {t("sign_out")}
            </Button>
          )}
        </DrawerList>
      </Box>
    </StyledDrawer>
  );
};
