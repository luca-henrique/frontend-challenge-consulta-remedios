export interface Props {
  cart: [];
  products: [];
  total: number;
  subtotal: number;
  shipping: number;
}

export const initialState: Props = {
  products: [],
  cart: [],
  shipping: 0,
  subtotal: 0,
  total: 0,
};
