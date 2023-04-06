import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const noteId = req.query.id
  const { title, content, id } = req.body
  // DELETE
  if (req.method === 'DELETE') {
    const note = await prisma.note.delete({
      where: { id: Number(noteId) }
    })
    res.json(note)
  }
  // UPDATE
  else if (req.method === 'PUT') {
    const note = await prisma.note.update({
      where: { id: Number(noteId) },
      data: {
        title,
        content
      }
    })
    res.status(200).json({ message: 'Note updated' })
  }
  else {
    const notes = await prisma?.note.findFirst({
      where: {
        id: Number(noteId)
      }
    })
    if (notes === null) {
      res.json('Not found or Excluded')
    }
    res.json(notes)
  }
}