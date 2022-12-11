import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 16px 17px 21px 3px rgba(34, 60, 80, 0.53);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImgItem = styled.li`
  border-radius: 2px;
`;
