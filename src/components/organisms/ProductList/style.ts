import styled from 'styled-components';
export const Container = styled.div`
  display: grid;

  gap: 40px 30px;

  grid-template-areas:
    '1 2 3'
    '1 2 3'
    '1 2 3';

  @media (max-width: 820px) {
    grid-template-areas:
      '1 2'
      '1 2'
      '1 2';
  }

  @media (max-width: 420px) {
    grid-template-areas:
      '1'
      '1'
      '1';
  }
`;
