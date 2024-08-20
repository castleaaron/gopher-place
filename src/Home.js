import React, { useEffect, useState } from 'react';
import './assets/css/Home.css';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('.components/api/Posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <p>HELLO</p>
        <div>
          {posts.map(post => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Home;