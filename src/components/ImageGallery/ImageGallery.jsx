import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onOpenModal, onCloseModal }) {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          onOpenModal={() => onOpenModal(image.largeImageURL)}
          onCloseModal={() => onCloseModal()}
        />
      ))}
    </ul>
  );
}
