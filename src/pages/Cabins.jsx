import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CapinOparetions from "../features/cabins/CapinOparetions";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabin</Heading>
        <CapinOparetions />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
