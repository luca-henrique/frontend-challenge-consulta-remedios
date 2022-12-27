export enum ActionType {
  READ_PRODUCTS,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
}

export interface ReadProducts {
  type: ActionType.READ_PRODUCTS;
  payload: any;
}

export interface AddProductCart {
  type: ActionType.ADD_PRODUCT_CART;
  payload: any;
}

export interface RemoveProductCart {
  type: ActionType.REMOVE_PRODUCT_CART;
  payload: any;
}

export type ProductCartActions =
  | AddProductCart
  | RemoveProductCart
  | ReadProducts;
