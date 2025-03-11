import React, { useEffect , useState } from 'react';

export default function Joke() {

    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
          .then(response => response.json())
          .then(result => {
             console.log(result);
             setIsLoading(false);
             setJoke(result.setup + ' ' + result.punchline);
           })
           .catch(error => {
            setIsLoading(false);
            setErrorMessage('There was an error');
            console.log(error);
          });
        }, []);

        
  return(
   <div>
    <h1>Joke API</h1>
    {isLoading && <div>Loading...</div>}
    {joke && <div>{joke}</div>}
     {errorMessage && <div>{errorMessage}</div>}  
  </div>
);
}