import {
  DialogProps,
  DialogActions,
  DialogContent,
  Dialog,
  ButtonProps as MuiButtonProps,
  Button,
  DialogTitle,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const GenericDialog = ({
  onClose,
  onSubmit,
  dialog,
  children,
  sx,
  ...props
}: GenericDialogProps) => {
  const { t } = useTranslation();
  const {
    title,
    closeButton = { label: t("cancel") },
    submitButton = { label: t("accept") },
  } = dialog;
  const { label: submitButtonLabel, ...submitButtonProps } = submitButton;
  const { label: closeButtonLabel, ...closeButtonProps } = closeButton;

  return (
    <Dialog
      onClose={onClose}
      fullWidth
      {...props}
      PaperProps={{
        sx: {
          maxWidth: "842px",
          padding: "20px 50px 20px 50px",
          borderRadius: "50px",
        },
      }}
    >
      <DialogTitle sx={{ pb: 3 }} variant="h3" textAlign="center">
        {title}
      </DialogTitle>
      <DialogContent sx={{ px: "8px", py: 3 }}>
        <Paper
          sx={{
            backgroundColor: "common.white",
            color: "common.black",
            borderRadius: "10px",
            height: "300px",
            overflow: "auto",
            p: 2,
          }}
        >
          {children}
        </Paper>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "flex-start",
          columnGap: 1,
        }}
      >
        {!!submitButton && (
          <Button
            variant="contained"
            sx={{
              px: 4,
            }}
            {...submitButtonProps}
            onClick={onSubmit}
          >
            {submitButtonLabel}
          </Button>
        )}
        {!!closeButton && (
          <Button
            variant="contained"
            color="secondary"
            sx={{
              px: 4,
            }}
            {...closeButtonProps}
            onClick={onClose}
          >
            {closeButtonLabel}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export type GenericDialogProps = Omit<DialogProps, "onClose" | "onSubmit"> & {
  dialog: {
    title: string;
    submitButton?: MuiButtonProps & {
      label: string;
    };
    closeButton?: MuiButtonProps & {
      label: string;
    };
  };
  onClose: () => void;
  onSubmit?: () => void;
};
