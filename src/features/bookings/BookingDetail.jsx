import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import Usebooking from "./UseBooking";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout copy";
import DeletCabinModal from "../cabins/DeleteCbinModal";
import { UseDeleteBoking } from "./UseDeleteCabin";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, booking } = Usebooking();

  const { checkout, isCheckingout } = useCheckout();

  const { deleteBooking, isdeleting } = UseDeleteBoking();

  const navigate = useNavigate();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if (isLoading) return <Spinner />;
  const { status, id } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {id} </Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>check in</Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        {status === "checked-in" && (
          <Button disabled={isCheckingout} onClick={() => checkout(id)}>
            <HiArrowUpOnSquare />
            check out
          </Button>
        )}
        <DeletCabinModal
          onConfirm={() =>
            deleteBooking(id, {
              onSettled: () => navigate(-1),
            })
          }
          disabled={isdeleting}
        />
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
