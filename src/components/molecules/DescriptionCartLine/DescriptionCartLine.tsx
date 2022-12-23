import styled from 'styled-components';
import {formatPrice} from '../../../util/formatPrice';

const Name = styled.h6`
  font-size: 14px;
  color: #7f7575;
`;

const Price = styled.h6`
  font-size: 16px;
  color: #423b3b;
`;

type DescriptionCartLineProps = {
  name: string;
  price: number;
};

export const DescriptionCartLine = ({
  name,
  price,
}: DescriptionCartLineProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '18px',
      }}
    >
      <Name>{name}</Name>
      <Price>{formatPrice(price)}</Price>
    </div>
  );
};
