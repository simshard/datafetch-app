import Reddit from './Reddit';
import Joke from './Joke';
import { useState } from 'react';
function App() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJokeVisible] = useState(false);

  return (
    
    <div className="App" >
      <div>
      <h1>Data Fetch App</h1>
      <div className="buttons">
        <button onClick={() => setRedditVisible(prevRedditVisible => !prevRedditVisible)}
        > Toggle Reddit</button>

        <button onClick={() => setJokeVisible(prevJokeVisible => !prevJokeVisible)}>
          Toggle Joke
        </button>

      </div>
   
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
    </div>
  );
}

export default App;