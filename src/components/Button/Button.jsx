import React from 'react';
import { ButtonLoadMore } from './Button.styled';

export default function Button({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
}
