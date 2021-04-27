import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import Button from '../Button';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>Welcome Back</h1>
          <h2>Please log in.</h2>
          <LoginForm />
          <Button text={"Don't have an account?"} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;