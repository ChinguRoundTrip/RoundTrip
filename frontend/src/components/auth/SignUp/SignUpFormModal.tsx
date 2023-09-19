import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import SignUpForm from "./SignUpForm";
import "../auth.css";

export default function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        id="auth-modal-main-page"
        onClick={() => setShowModal(true)}
      >
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}
