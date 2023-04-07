import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { emai, password } = req.body

  // UPDATE
  if (req.method === 'PUT') {
    const user = await prisma.user.update({
      where: {
        emai: String(emai)
      },
      data: {
        password: password
      }
    })
    res.status(200).json({ message: 'user updated' + String(user) })
  } else {
    res.status(400).json('Not Allowed')
  }
}