import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Css/Blogdetails.css';
import { Link } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error('Error fetching post:', err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="blog-details-container">
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      <p>{post.content}</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#3498db' }}>← Back to posts</Link>
    </div>
  );
}

export default BlogDetails;
