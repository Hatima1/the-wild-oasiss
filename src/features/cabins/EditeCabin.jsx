import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import { HiPencil } from "react-icons/hi2";
import Menus from "../../ui/Menus";

function EditeCabin({ cabin }) {
  const [isopen, setIsopen] = useState(false);
  return (
    <div>
      <Menus.Button
        icon={<HiPencil />}
        onClick={() => setIsopen((show) => !show)}
      ></Menus.Button>

      {/* <button
        onClick={() => {
          setIsopen((show) => !show);
        }}
      >
        <HiPencil />
      </button> */}
      {isopen && (
        <Modal onClose={() => setIsopen(false)}>
          <CreateCabinForm
            cabintoedit={cabin}
            onCloseModle={() => setIsopen(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default EditeCabin;
