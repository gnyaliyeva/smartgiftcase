import React from "react";
import Popup from "reactjs-popup";

import Button from "../Button";
import Icon from "../Icon";

import "./style.scss";

const Modal = ({ modal, setModal, buttons }) => {
  const onCloseModal = () => {
    setModal({ ...modal, isOpen: false })
  }
  return (
    <Popup
      open={modal.isOpen}
      closeOnDocumentClick
      onClose={onCloseModal}
      className="modal-wrapper"
    >
      <div className="modal">
        <div className="modal__header">
          <Button transparent onClick={onCloseModal}>
            <Icon name="close" width={14} />
          </Button>
        </div>
        <div className="modal__content">
          <Icon name={modal.iconName} />
          {modal.message}
        </div>
        <div className="modal__footer">
          {buttons}
          <Button primary onClick={onCloseModal}>
            Close
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default Modal;
