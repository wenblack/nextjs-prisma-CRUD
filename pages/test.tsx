import { VStack, Image } from '@chakra-ui/react'
import axios from 'axios';
import { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react';

interface BeerProps {
  id: number,
  name: string,
  description: string,
  note: number,
  count: number
}

const Test  = ()=>{
	const [response, setResponse] = useState(null);
  const [peopleDetail, setPeopleDetail] = useState<BeerProps[]>([])
	const fetchQuotes = async () => {
		try {
			const res = await axios.get('http://localhost:3000/api/beers');
			setResponse(res.data);
      setPeopleDetail(res.data)
      console.log(res.data)
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		// Trigger the API Call
		fetchQuotes();
	}, []);
	  return (
    <VStack>
      <Head>
        <title>Beers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
  
      <div className="w-auto min-w-[25%] max-w-min mt-10 mx-auto space-y-6 flex flex-col items-stretch">
         <h1 className="text-center font-bold text-2xl m-4">Total : {peopleDetail.length}</h1>
        <ul>
          {peopleDetail.map(beer => (
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

export default Test