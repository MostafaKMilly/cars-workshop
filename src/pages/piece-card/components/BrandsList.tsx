import { Divider, List, ListItem, ListItemButton, alpha } from "@mui/material";
import { useBrands } from "../hooks";

export const BrandsList = ({
  selectedBrand,
  handleSelectBrand,
}: {
  selectedBrand?: string;
  handleSelectBrand: (brand: string) => void;
}) => {
  const { data: brands } = useBrands();

  return (
    <List sx={{ color: "primary.main" }}>
      {brands?.map((brand) => (
        <>
          <ListItem
            key={brand.id}
            disablePadding
            sx={{
              backgroundColor:
                selectedBrand === brand.name ? "#ADCE7F" : "inherit",
            }}
          >
            <ListItemButton
              disableRipple
              onClick={() => {
                handleSelectBrand(brand.name);
              }}
            >
              {brand.name}
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
