import { Grid, Paper, Typography } from "@mui/material";
import { CardContainer, CardForm } from "./components";
import { useTranslation } from "react-i18next";
import { useCardForm } from "./hooks";

export const PieceCard = () => {
  const { t } = useTranslation();
  const form = useCardForm();
  return (
    <CardContainer elevation={1}>
      <Typography variant="h1">{t("piece_card")}</Typography>
      <Grid container justifyContent="space-between" mt={5} overflow="auto">
        <Grid item xs={12} sm={5}>
          <CardForm {...form} />
        </Grid>
        <Grid item xs={12} sm={5}></Grid>
      </Grid>
    </CardContainer>
  );
};
