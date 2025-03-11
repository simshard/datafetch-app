import React, { useEffect , useState } from 'react';

export default function Reddit() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
    fetch('https://www.reddit.com/r/thefall.json') //https://www.reddit.com/r/thefall/
          .then(response => response.json())
          .then(results => {
             console.log(results.data.children);
             setIsLoading(false);
             setPosts(results.data.children);
           })
           .catch(error => {
            setIsLoading(false);
            setErrorMessage('There was an error');
            console.log(error);
          });
        }, []);

        
  return(
   <div>
    <h1>Reddit API</h1>
    {isLoading && <div>Loading...</div>}
    {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.data.id}>
              <a href={`https://reddit.com${post.data.permalink}`}>
                {post.data.title}
                {/* <img src={post.data.thumbnail} /> */}
              </a>
            </li>
          ))}
        </ul>
    )} 
     {errorMessage && <div>{errorMessage}</div>}  
  </div>
);
}