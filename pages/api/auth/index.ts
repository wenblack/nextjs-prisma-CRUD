import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { emai, password } = req.body

  const users = await prisma?.user.findFirst({
    where: {
      emai: String(emai),
      password: String(password)
    },
    select: {
      emai: true,
      name: true,
      avatarUrl: true,
    }
  })
  if (users != null) {
    res.json(true)
  }
  res.json(false)
}