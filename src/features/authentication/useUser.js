import { useQuery } from "@tanstack/react-query";
import { getCurentUser } from "../../services/apiAuth";

export function UseUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurentUser,
  });

  return { isLoading, user, isaAthenticated: user?.role === "authenticated" };
}
