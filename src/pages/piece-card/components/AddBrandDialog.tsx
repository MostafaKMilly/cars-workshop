import {
  GenericDialog,
  GenericDialogProps,
} from "@/shared/components/GenericDialog";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import { BrandsList } from "./BrandsList";

export const AddBrandDialog = ({
  handleAddBrand,
  ...props
}: Pick<GenericDialogProps, "open" | "onClose"> & {
  handleAddBrand: (brand: string) => void;
}) => {
  const [brand, setBrand] = useState<string>("");
  const { t } = useTranslation();

  const handleSelectBrand = (selectedBrand: string) => {
    if (brand === selectedBrand) {
      return setBrand("");
    }
    setBrand(selectedBrand);
  };

  return (
    <GenericDialog
      {...props}
      dialog={{
        title: t("choose_brand"),
      }}
      onSubmit={() => {
        handleAddBrand(brand);
        props.onClose();
      }}
    >
      <Suspense fallback={<CircularProgress sx={{ textAlign: "center" }} />}>
        <BrandsList
          selectedBrand={brand}
          handleSelectBrand={handleSelectBrand}
        />
      </Suspense>
    </GenericDialog>
  );
};
