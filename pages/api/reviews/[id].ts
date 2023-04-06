import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reviewId = req.query.id
  const { content } = req.body

  // UPDATE
  if (req.method === 'PUT') {
    const review = await prisma.review.update({
      where: { id: String(reviewId) },
      data: {
        content: content
      }
    })
    res.status(200).json({ message: 'review updated' + review })
  }
  else {
    const reviews = await prisma?.review.findFirst({
      where: {
        id: String(reviewId)
      }
    })
    if (reviews === null) {
      res.json('Not found or Excluded')
    }
    res.json(reviews)
  }
}