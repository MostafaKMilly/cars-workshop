import API from "@/api/client";
import { UseQueryOptions, useQuery } from "react-query";
import { Owners } from "../types";

const ownersQuery = {
  queryKey: ["OwnersQuery"],
  queryFn: () =>
    API.get<Owners>("/code-challenge.php", {
      params: {
        get: "owners",
      },
    }),
  suspense: true,
} satisfies UseQueryOptions;

export const useOwners = () => {
  const query = useQuery(ownersQuery);
  return query;
};
