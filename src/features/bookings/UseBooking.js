import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function Usebooking() {
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
  console.log(sortBy);

  const {
    isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, bookings, error };
}
