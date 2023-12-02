import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function UseDeleteCabin() {
  const queryClientt = useQueryClient();

  const { isLoading: isdeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("cabin successfuly delete");
      queryClientt.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (er) => toast.error(er.message),
  });
  return { isdeleting, deleteCabin };
}
