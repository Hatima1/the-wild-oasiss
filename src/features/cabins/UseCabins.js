import { useQuery } from "@tanstack/react-query";
import getCapins from "../../services/apiCabins";

function Usecabins() {
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCapins,
  });
  return { isLoading, cabins, error };
}

export default Usecabins;
