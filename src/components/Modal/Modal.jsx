import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  render() {
    const { url, onCloseModal } = this.props;

    return createPortal(
      <div className="overlay" onClose={onCloseModal}>
        <div className="modal">
          <img src={url} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
