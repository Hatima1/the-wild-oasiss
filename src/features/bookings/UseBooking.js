import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings";

export function Usebooking() {
  const {
    isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });
  return { isLoading, bookings, error };
}
