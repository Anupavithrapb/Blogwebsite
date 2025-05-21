import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Css/Bloglist.css';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div className="blog-list-container">
      <h1>Blog Posts</h1>
      <ul className="blog-posts">
        {posts.map(post => (
          <li key={post._id} className="blog-post">
            <Link to={`/post/${post._id}`}>
              <h2>{post.title}</h2>
              <p>By {post.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
