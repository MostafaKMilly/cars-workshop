import { Divider, List, ListItem, ListItemButton, alpha } from "@mui/material";
import { useOwners } from "../hooks/useOwners";

export const OwnersList = ({
  selectedOwner,
  handleSelectOwner,
}: {
  selectedOwner?: string;
  handleSelectOwner: (owner: string) => void;
}) => {
  const { data: owners } = useOwners();

  return (
    <List sx={{ color: "primary.main" }}>
      {owners?.map((owner) => (
        <>
          <ListItem
            key={owner.id}
            disablePadding
            sx={{
              backgroundColor:
                selectedOwner === owner.name ? "#ADCE7F" : "inherit",
            }}
          >
            <ListItemButton
              disableRipple
              onClick={() => {
                handleSelectOwner(owner.name);
              }}
            >
              {owner.name}
            </ListItemButton>
          </ListItem>
          <Divider
            sx={{
              border: ({ palette }) => `1px solid ${palette.primary.light}`,
            }}
          />
        </>
      ))}
    </List>
  );
};
