import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creatEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClientt = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ NewCabinData, id }) => creatEditCabin(NewCabinData, id),
    onSuccess: () => {
      toast.success("cabin successfuly add");
      queryClientt.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (er) => toast.error(er.message),
  });
  return { isEditing, editCabin };
}
