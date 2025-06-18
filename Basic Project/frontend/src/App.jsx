import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App(){

  const [jokes , setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => setJokes(response.data))
    .catch((error) => console.log(error));
  } , [])


  return(
    <div className='bg-black text-white flex justify-center h-[100vh] flex-col items-center'>
      <h1 className='text-6xl font-bold'>Hello World!</h1>
      <p className='text-4xl font-semibold p-6'>Jokes : {jokes.length}</p>

      {jokes.map((joke , index) => (
        <div key={joke.id}>
          <h3 className='text-3xl p-3'>{joke.title}</h3>
          <p className='text-2xl p-3'>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App