import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import PostCard from '@/components/common/PostCard';

const PostList: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts.items);

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;