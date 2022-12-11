import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  render() {
    const { url, onClose } = this.props;

    return createPortal(
      <ModalOverlay onClick={onClose}>
        <ModalWindow>
          <ModalImg src={url} alt="img" />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}
