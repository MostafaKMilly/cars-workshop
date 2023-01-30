import {
  ListItem,
  ListItemIcon,
  ListItemProps,
  ListItemText,
  ListItemButton as MuiListItemButton,
  alpha,
  styled,
} from "@mui/material";

export const DrawerListItem = ({
  icon,
  text,
  active,
  isDrawerOpen,
  ...props
}: ListItemProps & {
  text: string;
  icon: React.ReactElement;
  active?: boolean;
  isDrawerOpen: boolean;
}) => {
  return (
    <ListItem disablePadding {...props}>
      <ListItemButton disableRipple active={active} isDrawerOpen={isDrawerOpen}>
        {isDrawerOpen && <ListItemText>{text}</ListItemText>}
        <ListItemIcon>{icon}</ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};

const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isDrawerOpen",
})<{ active?: boolean; isDrawerOpen: boolean }>(
  ({ theme, active, isDrawerOpen }) => ({
    backgroundColor: active
      ? alpha(theme.palette.secondary.main, 0.7)
      : theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: 18,
    borderRadius: isDrawerOpen ? 15 : "0px 15px 15px 0px",
    marginRight: 24,
    marginLeft: isDrawerOpen ? 24 : 0,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.7),
    },
  })
);
