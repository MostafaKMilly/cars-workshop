import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  return (
    <Select
      variant="outlined"
      value={i18n.language}
      sx={{ backgroundColor: "common.white" }}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value as string);
      }}
    >
      <MenuItem value="en">En</MenuItem>
      <MenuItem value="ar">Ar</MenuItem>
    </Select>
  );
};
