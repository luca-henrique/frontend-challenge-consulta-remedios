export interface Props {
  cart: [];
  total: number;
  subtotal: number;
  shipping: number;
}

export const initialState: Props = {
  cart: [],
  shipping: 0,
  subtotal: 0,
  total: 0,
};
