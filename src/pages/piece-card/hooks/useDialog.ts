import { useCallback, useState } from "react";
import { Dialog } from "../types";

export const useDialog = () => {
  const [state, setState] = useState<Dialog>();

  const isDialogOpen = useCallback(
    (dialog: Dialog) => dialog === state,
    [state]
  );
  const openDialog = useCallback((dialog: Dialog) => setState(dialog), [state]);
  const handleClose = useCallback(() => setState(undefined), [setState]);
  return { dialog: state, isDialogOpen, openDialog, handleClose };
};
