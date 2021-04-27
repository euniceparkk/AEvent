import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Entry from './EntryFormModal';

function EntryModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Entry />
        </Modal>
      )}
    </>
  );
}

export default EntryModal;
