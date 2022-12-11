import React from 'react';
import { Image, ImgGalleryItem } from './imageGalleryItem.styled';

const ImageGalleryItem = ({ openModal, src }) => {
  return (
    <ImgGalleryItem onClick={openModal}>
      <Image src={src} alt="img" />
    </ImgGalleryItem>
  );
};

export default ImageGalleryItem;
