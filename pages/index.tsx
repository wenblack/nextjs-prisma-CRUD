import type { NextPage } from 'next'
import Head from 'next/head'
import { prisma } from '../lib/prisma'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { VStack } from '@chakra-ui/react'

// Array interface
interface Beers {
  beers: {
       id: number,
      name: string,
      description: string
  }[]
}

// Load notes from getServerSideProps server side rendering
const Home: NextPage<Beers> = ({ beers }) => {
  const router = useRouter()

  return (
    <VStack>
      <Head>
        <title>Beers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
  
      <div className="w-auto min-w-[25%] max-w-min mt-10 mx-auto space-y-6 flex flex-col items-stretch">
         <h1 className="text-center font-bold text-2xl m-4">All Beers</h1>
        <ul>
          {beers.map(beer => (
            <li key={beer.id} className="border-b border-gray-600 p-2">
              <div className="flex jusify-between">
                <div className="flex-1">
                  <h3 className="font-bold">{beer.name}</h3>
                  <p className="text-sm">{beer.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </VStack>
  )
}

export default Home

// Server side rendering on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // READ all notes from DB
  const beers = await prisma?.beer.findMany({
    select: {
      id: true,
      name: true,
      description: true
    }
  })

  return {
    props: {
      beers
    }
  }
}