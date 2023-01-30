import { List, ListProps } from "@mui/material";

export const DrawerList = (props: ListProps) => {
  return (
    <List
      sx={{
        rowGap: 2,
        display: "flex",
        flexDirection: "column",
        my: 4,
        height: "100%",
        width: "100%",
        overflow: "auto",
      }}
      {...props}
    >
      {props.children}
    </List>
  );
};
