import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function Usebookings() {
  const QueryClient = useQueryClient();
  const [serchPrams] = useSearchParams();
  const filterVAlue = serchPrams.get("status");

  const filter =
    !filterVAlue || filterVAlue === "all"
      ? null
      : { field: "status", value: filterVAlue };
  console.log(filter);
  //sort
  const sortRow = serchPrams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortRow.split("-");
  const sortBy = { field, direction };

  //page
  const page = !serchPrams.get("page") ? 1 : Number(serchPrams.get("page"));
  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const PaceCount = Math.ceil(count / PAGE_SIZE);
  if (PaceCount > page) {
    QueryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  //prev page without first one
  if (page > 1) {
    QueryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }
  return { isLoading, bookings, error, count };
}
