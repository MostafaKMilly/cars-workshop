import {
  GenericDialog,
  GenericDialogProps,
} from "@/shared/components/GenericDialog";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import { OwnersList } from "./OwnersList";

export const AddOwnerDialog = ({
  handleAddOwner,
  ...props
}: Pick<GenericDialogProps, "open" | "onClose"> & {
  handleAddOwner: (owner: string) => void;
}) => {
  const [owner, setOwner] = useState<string>("");
  const { t } = useTranslation();

  const handleSelectOwner = (selectedOwner: string) => {
    if (owner === selectedOwner) {
      return setOwner("");
    }
    setOwner(selectedOwner);
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: t("choose_owner"),
      }}
      onSubmit={() => {
        handleAddOwner(owner);
        props.onClose();
      }}
    >
      <Suspense fallback={<CircularProgress sx={{ textAlign: "center" }} />}>
        <OwnersList
          selectedOwner={owner}
          handleSelectOwner={handleSelectOwner}
        />
      </Suspense>
    </GenericDialog>
  );
};
