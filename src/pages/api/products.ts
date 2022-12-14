import type {NextApiRequest, NextApiResponse} from 'next';
import {runMiddleware, cors} from './cors';

import Products from '../../mock/products.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await runMiddleware(req, res, cors);

  if (req.method === 'GET') {
    res.status(200).json(Products);
  } else {
    res.status(400).json(undefined);
  }
}
