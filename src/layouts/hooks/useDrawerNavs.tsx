import { useTranslation } from "react-i18next";
import Export from "@/assets/icons/export.svg";
import Technician from "@/assets/icons/technician.svg";
import Workshop from "@/assets/icons/workshop.svg";
import Repair from "@/assets/icons/repair.svg";

export const useDrawerNavs = () => {
  const { t } = useTranslation();
  const navs: NavItem[] = [
    {
      text: t("brand_card"),
      icon: <img src={Export} />,
      link: "/brand-card",
    },
    {
      text: t("model_card"),
      icon: <img src={Export} />,
      link: "/model-card",
    },
    {
      text: t("piece_card"),
      icon: <img src={Export} />,
      link: "/piece-card",
    },
    {
      text: t("technical_card"),
      icon: <img src={Technician} />,
      link: "/technical-card",
    },
    {
      text: t("section_card"),
      icon: <img src={Workshop} />,
      link: "/section-card",
    },
    {
      text: t("service_card"),
      icon: <img src={Repair} />,
      link: "/service-card",
    },
  ];
  return navs;
};

type NavItem = {
  text: string;
  icon: React.ReactElement;
  link: string;
};
