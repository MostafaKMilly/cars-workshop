import { useFormik } from "formik";
import { PieceCardForm } from "../types";

export const useCardForm = () => {
  const formik = useFormik<PieceCardForm>({
    initialValues: {
      brand: "",
      carpets: "",
      code: 0,
      color: "",
      date: "",
      description: "",
      fuel: "",
      latinName: "",
      model: "",
      owner: "",
      pieceId: 0,
      serialNumber: 0,
      status: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return formik;
};
