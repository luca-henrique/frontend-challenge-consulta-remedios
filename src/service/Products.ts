import axios from 'axios';

export class ProductService {
  private urlPath: string;

  constructor() {
    this.urlPath = 'http://localhost:3000/api';
  }

  async get() {
    const {data} = await axios.get(`${this.urlPath}/products`);
    return data;
  }
}
