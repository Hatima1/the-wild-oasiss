import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import DeletCabinModal from "../cabins/DeleteCbinModal";

import { formatCurrency } from "../../utils/helpers";

import { formatDistanceFromNow } from "../../utils/helpers";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { UseDeleteBoking } from "./UseDeleteCabin";

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 1rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const navigate = useNavigate();
  const { checkout, isCheckingout } = useCheckout();
  const { deleteBooking, isdeleting } = UseDeleteBoking();
  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <StyledButton onClick={() => navigate(`/booking/${bookingId}`)}>
        <HiEye />
      </StyledButton>

      <DeletCabinModal
        onConfirm={() => deleteBooking(bookingId)}
        disabled={isdeleting}
      />

      {status === "unconfirmed" && (
        <StyledButton onClick={() => navigate(`/booking/${bookingId}`)}>
          <HiArrowDownOnSquare />
        </StyledButton>
      )}
      {status === "checked-in" && (
        <StyledButton
          disabled={isCheckingout}
          onClick={() => checkout(bookingId)}
        >
          <HiArrowUpOnSquare />
        </StyledButton>
      )}
    </Table.Row>
  );
}

export default BookingRow;
