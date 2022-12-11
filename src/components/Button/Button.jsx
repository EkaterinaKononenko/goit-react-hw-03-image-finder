import React from 'react';
import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
