import React from 'react';

interface PostCardProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const PostCard  = ({ post } : PostCardProps) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
