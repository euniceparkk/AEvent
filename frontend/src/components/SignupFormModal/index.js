import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import Button from '../Button';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className='form-modal'>
            <h1 className='h1'>Welcome</h1>
            <h2 className='h2'>Create an account.</h2>
            <SignupForm />
            <Button text={'Have an account?'} />
            <a href="#" class="modal__close">&times;</a>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
