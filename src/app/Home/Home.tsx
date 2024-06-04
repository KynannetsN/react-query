"use client";
import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { usePosts } from '../hooks/usePosts';


const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = usePosts(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <div className="posts-container">
        {data?.map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1 }
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={data?.length < 10 }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
