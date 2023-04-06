import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const beerId = req.query.id
  const { name, description, id } = req.body
  // DELETE
  if (req.method === 'DELETE') {
    const beer = await prisma.beer.delete({
      where: { id: String(beerId) }
    })
    res.json(beer)
  }
  // UPDATE
  else if (req.method === 'PUT') {
    const beer = await prisma.beer.update({
      where: { id: String(beerId) },
      data: {
        name: name,
        description: description,
      }
    })
    res.status(200).json({ message: 'beer updated' + beer })
  }
  else {
    const beers = await prisma?.beer.findFirst({
      where: {
        id: String(beerId)
      }
    })
    if (beers === null) {
      res.json('Not found or Excluded')
    }
    res.json(beers)
  }
}