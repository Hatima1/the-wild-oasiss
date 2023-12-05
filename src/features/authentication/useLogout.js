import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function Uselogout() {
  const queryClient = useQueryClient();
  // queryClient.getQueryCache(["user",user])
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/dashboard", { replace: true });
    },
  });

  return { logout, isLoading };
}
