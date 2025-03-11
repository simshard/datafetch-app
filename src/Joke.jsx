import React from 'react';
import useFetch from './useFetch';

export default function Joke() {

  const{data:joke, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/jokes/random');
        
  return(
   <div>
    <h1>Joke API</h1>
    {isLoading && <div>Loading...</div>}
    {joke && <div>{joke.setup+' '+joke.punchline}</div>}
     {errorMessage && <div>{errorMessage}</div>}  
  </div>
);
}