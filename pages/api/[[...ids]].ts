import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { ids } } = req

  if(ids) {
    const postIds = ids as string[];
    res.end(`Post: ${postIds.join(', ')}`)
  } else {
    res.end("no ids")
  }
}
