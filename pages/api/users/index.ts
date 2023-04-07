import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const notes = await prisma?.user.findMany({
  })
  if (notes.length === 0) {
    res.json('We dont have any beers')
  }
  res.json(notes)

}