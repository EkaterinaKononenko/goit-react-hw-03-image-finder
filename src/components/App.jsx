import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import MyLoader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './api';
import { Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    page: 1,
    query: '',
    hits: [],
    isLoading: false,
    error: null,
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
          return toast.warn("We couldn't find result on your request.", {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
        }

        if (page === 1)
          return toast.success(`Wow! We found what you need!`, {
            icon: '🚀',
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });

        if (response.length < 12)
          return toast.info(`That's all. We don't have more images.`, {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
      } catch (error) {
        this.setState({
          error: toast.error(
            'Something was wrong. Restart your browser and try again.',
            {
              position: 'top-right',
              autoClose: 3000,
              theme: 'colored',
            }
          ),
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { hits, isLoading, page } = this.state;
    const { handleSearch, loadMore } = this;
    const pageQuantity = Math.floor(hits.length / 12);

    return (
      <Container>
        <ToastContainer />
        <Searchbar onSubmit={handleSearch} />
        <ImageGallery images={hits} />
        {hits.length > 11 && !isLoading && pageQuantity === page && (
          <Button onClick={loadMore} />
        )}
        {isLoading && <MyLoader />}
      </Container>
    );
  }
}
