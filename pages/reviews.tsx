import type { NextPage } from 'next'
import Head from 'next/head'
import { prisma } from '../lib/prisma'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { VStack } from '@chakra-ui/react'

// Array interface
interface Reviews {
  reviews: {
    id: string
    content: string
    user: string
      userId: string
  }[]
}

// Load notes from getServerSideProps server side rendering
const Reviews: NextPage<Reviews> = ({ reviews }) => {
  const router = useRouter()

  return (
    <VStack>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-center font-bold text-2xl m-4">Notes</h1>
      <div className="w-auto min-w-[25%] max-w-min mt-10 mx-auto space-y-6 flex flex-col items-stretch">
        <h2 className="text-center font-bold text-xl mt-4">Saved Notes</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.userId} className="border-b border-gray-600 p-2">
              <div className="flex jusify-between">
                <div className="flex-1">
                  <p className="text-sm">{review.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </VStack>
  )
}

export default Reviews

// Server side rendering on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // READ all notes from DB
  const reviews = await prisma?.review.findMany({
    select: {
      id: true,
      content: true,
      userId: true,
    }
  })

  return {
    props: {
      reviews
    }
  }
}