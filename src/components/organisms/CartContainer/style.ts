import styled from 'styled-components';

export const CartContainer = styled.aside`
  display: flex;
  flex-direction: column;

  border: 1px solid #e1e1e1;
  padding: 20px 25px;

  width: 20%;
  min-width: 325px;
  max-height: 474px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  color: #363636;
  font-size: 18px;
`;

export const CartCountItem = styled.h4`
  color: #7f7575;
  font-size: 14px;
  margin-left: 4px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
