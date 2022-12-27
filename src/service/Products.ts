import axios from 'axios';

export class ProductService {
  private urlPath: string;

  constructor() {
    this.urlPath =
      'https://frontend-challenge-consulta-remedios.vercel.app/api';
  }

  async get() {
    const {data} = await axios.get(`${this.urlPath}/products`);
    return data;
  }
}
