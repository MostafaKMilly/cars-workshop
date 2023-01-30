import API from "@/api/client";
import { UseQueryOptions, useQuery } from "react-query";
import { Brands } from "../types";

const brandsQuery = {
  queryKey: ["BrandsQuery"],
  queryFn: () =>
    API.get<Brands>("/code-challenge.php", {
      params: {
        get: "brands",
      },
    }),
  suspense: true,
} satisfies UseQueryOptions;

export const useBrands = () => {
  const query = useQuery(brandsQuery);
  return query;
};
