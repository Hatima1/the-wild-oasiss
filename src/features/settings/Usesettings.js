import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function Usesettings() {
  const {
    data: setting,
    erroe,
    isLoading,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, erroe, setting };
}
