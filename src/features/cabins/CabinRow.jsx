import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import EditeCabin from "./EditeCabin";
import { UseDeleteCabin } from "./UseDeleteCabin";

import { useCreateCapin } from "./UseCreateCapin";

import DeletCabinModal from "./DeleteCbinModal";
import { HiSquare2Stack } from "react-icons/hi2";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;
  border: none;

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

function CabinRow({ cabin }) {
  const [showform, setshowform] = useState(false);
  const { isdeleting, deleteCabin } = UseDeleteCabin();
  const { isCreating, creatCabin } = useCreateCapin();

  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;
  function handleDuplicate() {
    creatCabin({
      name: `coby of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }
  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name} </Cabin>
        <div> fits up to {maxCapacity} guests </div>
        <Price>{formatCurrency(regularPrice)} </Price>
        {discount ? (
          <Discount>{formatCurrency(discount)} </Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Div>
            <StyledButton onClick={handleDuplicate} disabled={isCreating}>
              <HiSquare2Stack />
            </StyledButton>
            {/* <button onClick={() => setshowform((form) => !form)}>
            <HiPencil />
          </button> */}
            <EditeCabin cabin={cabin} />

            <DeletCabinModal
              onConfirm={() => deleteCabin(cabinId)}
              disabled={isdeleting}
            />
          </Div>
        </div>
      </TableRow>
      {showform && <CreateCabinForm cabintoedit={cabin} />}
    </>
  );
}

export default CabinRow;
