import React from 'react';

export default function ImageGalleryItem({ src, onOpenModal, onCloseModal }) {
  return (
    <li onClick={onCloseModal}>
      <img src={src} alt="" onClick={onOpenModal} width="200" />
    </li>
  );
}
