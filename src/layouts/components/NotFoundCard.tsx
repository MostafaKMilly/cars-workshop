import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import BuildingCard from "@/assets/images/building.svg";

export const NotFoundCard = () => {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={1}
      sx={{ p: 5, borderRadius: "50px", textAlign: "center" }}
    >
      <img src={BuildingCard} alt="chooseCard" width="235px" />
      <Typography sx={{ mt: 3 }} variant="body1">
        {t("card_under_bulding")}
      </Typography>
    </Paper>
  );
};
