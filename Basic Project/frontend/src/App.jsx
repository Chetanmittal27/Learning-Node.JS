import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function App(){

  const [jokes , setJokes] = useState([]);

useEffect(() => {
  axios.get('https://localhost:3000/jokes')
    .then((response) => setJokes(response.data))
    .catch((error) => console.log(error));
}, []);


  return (
    <div className='flex  flex-col justify-center items-center h-[100vh] bg-black text-white'>
      <h1 className='text-6xl font-bold'>Hello World</h1>
      <p className='text-4xl font-semibold p-7'>Jokes : {jokes.length}</p>

      {jokes.map((joke , index) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App