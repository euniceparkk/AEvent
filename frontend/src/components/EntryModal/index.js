import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Entry from './EntryFormModal';

import './EntryModal.css'
function EntryModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-btn' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Entry />
        </Modal>
      )}
    </>
  );
}

export default EntryModal;
