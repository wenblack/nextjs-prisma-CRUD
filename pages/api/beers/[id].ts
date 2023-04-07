import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const beerId = req.query.id

  if (req.method === 'GET') {
    const beers = await prisma?.beer.findFirst({
      where: {
        id: String(beerId)
      }
    })

    if (beers === null) {
      res.json('Not found or Excluded')
    }
    res.json(beers)
  } else {
    res.json('Access Denied')
  }

}