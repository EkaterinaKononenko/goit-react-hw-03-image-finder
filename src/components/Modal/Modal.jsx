import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow, ModalImg } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleEscClose = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
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
      <ModalOverlay>
        <ModalWindow>
          <ModalImg src={url} alt="img" onClick={onClose} />
        </ModalWindow>
      </ModalOverlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
