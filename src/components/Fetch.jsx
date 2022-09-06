import React, { useState, useEffect } from "react";

// import "./styles.css";

function Fetch() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

   const fetchFunction=() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setPosts(data));
  };

  useEffect(()=>{
    fetchFunction()
  },[])

  return (
    <div className="App">
      <h1>Posts</h1>
      <table>
        <th>Id</th>
        <th>Title</th>
      </table>
      {posts.map((post) => (
        <p>{post.id}.{post.title}</p>
      ))}
    </div>
  );
}


export default Fetch