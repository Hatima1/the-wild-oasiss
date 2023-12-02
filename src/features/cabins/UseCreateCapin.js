import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creatEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCapin() {
  const queryClientt = useQueryClient();

  const { isLoading: isCreating, mutate: creatCabin } = useMutation({
    mutationFn: creatEditCabin,
    onSuccess: () => {
      toast.success("cabin successfuly add");
      queryClientt.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (er) => toast.error(er.message),
  });
  return { isCreating, creatCabin };
}
