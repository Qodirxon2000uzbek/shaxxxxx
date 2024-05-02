import React, { useState } from 'react';
import './chat.css'

function CommentForm({ onCommentSubmit }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;
    onCommentSubmit({ name, comment });
    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Ismingiz:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comment">Fikringiz:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Jo'natish</button>
    </form>
  );
}

function CommentList({ comments }) {
  return (
    <div>
      <h2>Muhokamalar</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
 
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="app">
      <div className="miainss">
      <CommentList comments={comments} />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      </div>
    
      
    </div>
  );
}

export default App;
