import {
  FormControl,
  FormLabel,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { useCardForm } from "../hooks";
import { useTranslation } from "react-i18next";
import ThreedotsHorizontal from "@/assets/icons/threedotsHorizontal.svg";

export const CardForm = (props: ReturnType<typeof useCardForm>) => {
  const { getFieldProps, handleSubmit } = props;
  const { t } = useTranslation();

  return (
    <form id="PieceCardForm" onSubmit={handleSubmit}>
      <Stack spacing="13px" mx={3}>
        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "17px",
            flexDirection: "row",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("card_code")}</FormLabel>
          <TextField
            fullWidth
            {...getFieldProps("code")}
            sx={{ width: "121px" }}
            type="number"
          />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("description")}</FormLabel>
          <TextField fullWidth {...getFieldProps("description")} />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("latin_name")}</FormLabel>
          <TextField fullWidth {...getFieldProps("latinName")} />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("brand")}</FormLabel>
          <TextField
            fullWidth
            {...getFieldProps("brand")}
            InputProps={{
              disableUnderline: true,
              sx: {
                paddingRight: 0,
              },
              endAdornment: <img src={ThreedotsHorizontal} />,
            }}
          />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("model")}</FormLabel>
          <TextField fullWidth {...getFieldProps("model")} />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("serial_number")}</FormLabel>
          <TextField
            fullWidth
            {...getFieldProps("serialNumber")}
            type="number"
          />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("piece_id")}</FormLabel>
          <TextField fullWidth {...getFieldProps("pieceId")} type="number" />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("status")}</FormLabel>
          <TextField fullWidth {...getFieldProps("status")} select>
            <MenuItem value="work">{t("work")}</MenuItem>
            <MenuItem value="not_work">{t("not_work")}</MenuItem>
          </TextField>
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("owner")}</FormLabel>
          <TextField
            fullWidth
            {...getFieldProps("owner")}
            InputProps={{
              disableUnderline: true,
              sx: {
                paddingRight: 0,
              },
              endAdornment: <img src={ThreedotsHorizontal} />,
            }}
          />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("color")}</FormLabel>
          <TextField fullWidth {...getFieldProps("color")} />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>
            {t("manufacture_year")}
          </FormLabel>
          <TextField fullWidth {...getFieldProps("date")} type="date" />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("carpets")}</FormLabel>
          <TextField fullWidth {...getFieldProps("carpets")} />
        </FormControl>

        <FormControl
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "16px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormLabel sx={{ minWidth: "90px" }}>{t("fuel")}</FormLabel>
          <TextField fullWidth {...getFieldProps("fuel")} />
        </FormControl>
      </Stack>
    </form>
  );
};
