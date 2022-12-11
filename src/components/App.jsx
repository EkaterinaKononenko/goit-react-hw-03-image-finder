import React, { Component } from 'react';
//import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import MyLoader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './api';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
    openedModal: null,
    isLoading: false,
    error: null,
    largeImageUrl: ' ',
  };

  handleSearch = newQuery => {
    this.setState({
      page: 1,
      query: newQuery,
      hits: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  openModal = (type, url) => {
    this.setState({
      openedModal: type,
      largeImageUrl: url,
    });
  };

  closeModal = () => {
    this.setState({
      openedModal: null,
      largeImageUrl: ' ',
    });
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchImages(query, page);
        this.setState(prevState => {
          return { hits: [...prevState.hits, ...response] };
        });
        console.log(response);
        this.setState({
          isLoading: false,
        });
        if (response.length === 0) {
          return "We couldn't find result on your request.";
        }
      } catch (error) {
        this.setState({ error: { error } });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { hits, largeImageUrl, isLoading, page, openedModal } = this.state;
    const { openModal, closeModal, handleSearch, loadMore } = this;
    const pageQuantity = Math.floor(hits.length / 12);

    return (
      <Container>
        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={hits} onOpenModal={openModal} />
        {hits.length > 11 && !isLoading && pageQuantity === page && (
          <Button onClick={loadMore} />
        )}
        {isLoading && <MyLoader />}
        {openedModal && (
          <Modal url={largeImageUrl} alt="img" onClose={closeModal} />
        )}
      </Container>
    );
  }
}
