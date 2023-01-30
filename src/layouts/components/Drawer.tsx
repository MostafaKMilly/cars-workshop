import {
  CSSObject,
  Theme,
  Drawer as MuiDrawer,
  styled,
  Box,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DrawerList } from "./DrawerList";
import { useDrawerNavs } from "../hooks/useDrawerNavs";
import { DrawerListItem } from "./DrawerListItem";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { useSignout } from "@/shared/hooks/useSignout";
import MenuIcon from "@/assets/icons/menuIcon.svg";
import CloseIcon from "@/assets/icons/close.svg";

const drawerWidth = 360;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  position: "inherit",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    position: "fixed",
  },
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

const StyledDrawer = styled(MuiDrawer)(({ theme, open }) => ({
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

export const Drawer = ({
  handleToggleDrawer,
  open,
}: {
  open: boolean;
  handleToggleDrawer: () => void;
}) => {
  const navs = useDrawerNavs();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const signout = useSignout();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <StyledDrawer
      open={open}
      variant={matches ? "permanent" : "temporary"}
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "common.black",
        },
      }}
    >
      <Box display="flex" justifyContent={open ? "space-between" : "end"} p={2}>
        {open && <LanguageSelect />}
        <IconButton onClick={handleToggleDrawer}>
          {matches && <img src={MenuIcon} alt="MenuIcon" />}
          {!matches && (
            <img
              src={CloseIcon}
              alt="MenuIcon"
              style={{ background: "#fff", borderRadius: 7 }}
            />
          )}
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
