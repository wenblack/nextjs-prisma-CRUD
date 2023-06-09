import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const beers = await prisma?.beer.findMany({
    orderBy: {
      note: 'desc',
    }
  })
  if (beers.length === 0) {
    res.json('We dont have any beers')
  }
  res.json(beers)

}