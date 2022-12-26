export interface IProduct {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export interface IProducts {
  products: Array<IProduct>;
}
