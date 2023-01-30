import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { CardContainer, CardForm } from "./components";
import { useTranslation } from "react-i18next";
import { useCardForm } from "./hooks";
import PixcelMikeImg from "@/assets/images/pexelsMike.png";
import { useNavigate } from "react-router-dom";

export const PieceCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const form = useCardForm();

  const handleResetForm = () => {
    form.resetForm();
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <CardContainer elevation={1}>
      <Typography variant="h1">{t("piece_card")}</Typography>
      <Grid container justifyContent="space-between" mt={5} overflow="auto">
        <Grid item xs={12} sm={5}>
          <CardForm {...form} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            variant="body1"
            sx={{ color: "primary.light", mb: "20px" }}
          >
            {t("piece_photo")}
          </Typography>
          <Box
            component="img"
            src={PixcelMikeImg}
            sx={{
              border: ({ palette }) => `2px solid ${palette.primary.light}`,
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
      <Box
        width="100%"
        display="flex"
        columnGap={2}
        rowGap={2}
        mt={2}
        justifyContent="end"
        flexWrap="wrap"
      >
        <Button color="secondary" onClick={handleResetForm}>
          {t("new")}
        </Button>
        <Button color="secondary" type="submit" form="PieceCardForm">
          {t("save")}
        </Button>
        <Button color="error" onClick={handleResetForm}>
          {t("delete")}
        </Button>
        <Button onClick={handleClose}>{t("close")}</Button>
      </Box>
    </CardContainer>
  );
};
