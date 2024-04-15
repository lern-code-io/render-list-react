import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e);
      }
    };

    getPosts();
  }, []);

  return (
    <>
    <h1>List should appear below here!</h1>
    </>
  );
}

export default App;
