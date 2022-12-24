export enum ActionType {
  ADD_PRODUCT_CART,
}

export interface AddProductCart {
  type: ActionType.ADD_PRODUCT_CART;
  payload: any;
}

export type ProductCartActions = AddProductCart;
