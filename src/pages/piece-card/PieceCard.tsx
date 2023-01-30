import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { CardContainer, CardForm } from "./components";
import { useTranslation } from "react-i18next";
import { useCardForm, useDialog } from "./hooks";
import PixcelMikeImg from "@/assets/images/pexelsMike.png";
import { useNavigate } from "react-router-dom";
import { GenericDialog } from "@/shared/components";
import { AddBrandDialog } from "./components/AddBrandDialog";
import { AddOwnerDialog } from "./components/AddOwnerDialog";

export const PieceCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { openDialog, handleClose, isDialogOpen } = useDialog();
  const form = useCardForm();

  const handleResetForm = () => {
    form.resetForm();
  };

  const handleCloseCard = () => {
    navigate("/");
  };

  return (
    <CardContainer elevation={1}>
      <Typography variant="h1">{t("piece_card")}</Typography>
      <Grid
        container
        justifyContent="space-between"
        mt={5}
        overflow="auto"
        rowSpacing={2}
      >
        <Grid item xs={12} lg={5}>
          <CardForm {...form} openDialog={openDialog} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Typography
            variant="body1"
            sx={{ color: "primary.light", mb: "20px" }}
          >
            {t("piece_photo")}
          </Typography>
          <Box
            component="img"
            src={PixcelMikeImg}
            width="90%"
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
        justifyContent={{
          xs: "center",
          sm: "end",
        }}
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
        <Button onClick={handleCloseCard}>{t("close")}</Button>
      </Box>
      <AddBrandDialog
        open={isDialogOpen("brand")}
        onClose={handleClose}
        handleAddBrand={(brand) => {
          form.setFieldValue("brand", brand);
        }}
      />
      <AddOwnerDialog
        open={isDialogOpen("owner")}
        onClose={handleClose}
        handleAddOwner={(owner) => {
          form.setFieldValue("owner", owner);
        }}
      />
    </CardContainer>
  );
};
