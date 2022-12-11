import React, { Component } from 'react';
import {
  WrapSearchbar,
  Searchform,
  SearchformButton,
  SearchButtonSpan,
  SearchInput,
} from './Searchbar.styled';
import { Formik } from 'formik';

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
            <SearchformButton type="submit">
              <SearchButtonSpan>Search</SearchButtonSpan>
            </SearchformButton>

            <SearchInput
              onChange={this.handleInputChange}
              value={this.state.query}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Searchform>
        </WrapSearchbar>
      </Formik>
    );
  }
}