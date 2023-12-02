import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsopen((show) => !show)}>add new cabin</Button>
      {isopen && (
        <Modal onClose={() => setIsopen(false)}>
          <CreateCabinForm onCloseModle={() => setIsopen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
