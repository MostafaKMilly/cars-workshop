import { Paper, Typography } from "@mui/material";
import ChooseCard from "@/assets/images/chooseCard.svg";
import { useTranslation } from "react-i18next";

export const NoCardsOverlay = () => {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={1}
      sx={{ p: 5, borderRadius: "50px", textAlign: "center" }}
    >
      <img src={ChooseCard} alt="chooseCard" width="300px" />
      <Typography sx={{ mt: 3 }} variant="body1">
        {t("select_card")}
      </Typography>
    </Paper>
  );
};
