import type {NextApiRequest, NextApiResponse} from 'next';

type Data = {
  id: number;
  name: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | undefined>,
) {
  if (req.method === 'GET') {
    res.status(200).json([]);
  } else {
    res.status(400).json(undefined);
  }
}
