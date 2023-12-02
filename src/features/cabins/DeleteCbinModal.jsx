import { useState } from "react";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiTrash } from "react-icons/hi2";

function DeletCabinModal({ onConfirm, disabled }) {
  const [isopen, setIsopen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsopen((show) => !show);
        }}
      >
        <HiTrash />
      </button>
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
