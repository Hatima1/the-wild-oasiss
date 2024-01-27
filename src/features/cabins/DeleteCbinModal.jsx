import { useState } from "react";

import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";

import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiTrash } from "react-icons/hi2";

function DeletCabinModal({ onConfirm, disabled }) {
  const [isopen, setIsopen] = useState(false);
  return (
    <div>
      <Menus.Button
        icon={<HiTrash />}
        onClick={() => setIsopen((show) => !show)}
      ></Menus.Button>

      {isopen && (
        <Modal onClose={() => setIsopen(false)}>
          <ConfirmDelete
            closeModal={() => setIsopen(false)}
            onConfirm={onConfirm}
            disabled={disabled}
          />
        </Modal>
      )}
    </div>
  );
}

export default DeletCabinModal;
