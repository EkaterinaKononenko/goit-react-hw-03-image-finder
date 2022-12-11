import React from 'react';
import { Component } from 'react';
import { Image, ImgItem } from './imageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;
    return (
      <ImgItem onClick={toggleModal}>
        <Image src={webformatURL} alt="img" />
        {isModalOpen && <Modal url={largeImageURL} closeModal={toggleModal} />}
      </ImgItem>
    );
  }
}

export default ImageGalleryItem;
