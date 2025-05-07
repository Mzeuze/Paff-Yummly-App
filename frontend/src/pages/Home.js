import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts
    axios.get('/api/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="page-header"></div>

      <div className="action-buttons">
        <button onClick={() => navigate('/create')} className="btn create-post-btn">
          Create New Post
        </button>
        <button onClick={() => navigate('/recipes')} className="btn create-recipe-btn">
          Recipe Dashboard
        </button>
        <button onClick={() => navigate('/profile')} className="btn profile-btn">
          Your Profile
        </button>
        <button onClick={() => navigate('/groups')} className="btn groups-btn">
          Community Groups
        </button>
      </div>

      <h2>Latest Posts</h2>
      <div className="posts-container">
        {posts.map(post => {
          const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(post.userName || 'user')}`;
          
          return (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={avatarUrl} alt="avatar" className="avatar" />
                <p className="user-name">{post.userName}</p>
              </div>

              <h3 className="post-title">{post.title}</h3>

              {post.imagePath && (
                <img
                  src={`/uploads/${post.imagePath}`}
                  alt={post.title}
                  className="post-image"
                />
              )}

              <p className="post-description">{post.description}</p>

              <div className="post-actions">
                <button>❤️ Like</button>
                <button>💬 Comment</button>
                <button>🔗 Share</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
