export enum ActionType {
  READ_PRODUCTS,
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  SORT_PRODUCT_BY_PRICE,
  SORT_PRODUCT_BY_NAME,
  SORT_PRODUCT_BY_SCORE,
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

export interface SortProductsByName {
  type: ActionType.SORT_PRODUCT_BY_NAME;
}

export interface SortProductsByPrice {
  type: ActionType.SORT_PRODUCT_BY_PRICE;
}

export interface SortProductsByScore {
  type: ActionType.SORT_PRODUCT_BY_PRICE;
}

export type ProductCartActions =
  | AddProductCart
  | RemoveProductCart
  | SortProductsByName
  | SortProductsByPrice
  | SortProductsByScore
  | ReadProducts;
