import React, { useContext, useState } from "react";
import "./Modal.style.scss";

import Modal from "react-modal";
import {ModalToggle} from "../../pages/Home/Home"
Modal.setAppElement("#root");

export function VideoModal() {
  const {toggle, openModal} = useContext(ModalToggle)
  return (
      <Modal
        isOpen={toggle}
        onRequestClose={openModal}
        contentLabel="My dialog"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <iframe className="video" width="956" height="538" src="https://www.youtube.com/embed/K6rF35VGWAY?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
  );
}