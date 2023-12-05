import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingapi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function UseDeleteBoking() {
  const queryClientt = useQueryClient();

  const { isLoading: isdeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingapi,
    onSuccess: () => {
      toast.success("booking successfuly delete");
      queryClientt.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (er) => toast.error(er.message),
  });
  return { isdeleting, deleteBooking };
}
