import React, { Component } from 'react';
import {
  WrapSearchbar,
  Searchform,
  SearchformButton,
  //SearchButtonSpan,
  SearchInput,
} from './Searchbar.styled';
import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return 'Please, try again.';
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Formik>
        <WrapSearchbar>
          <Searchform onSubmit={this.handleSubmit}>
            <SearchInput
              onChange={this.handleInputChange}
              value={this.state.query}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <SearchformButton type="submit">
              <FcSearch size="30">Search</FcSearch>
            </SearchformButton>
          </Searchform>
        </WrapSearchbar>
      </Formik>
    );
  }
}
