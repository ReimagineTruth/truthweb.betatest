import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Import your post creation action here

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    // Add post creation logic here
    setContent('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none dark:bg-gray-700 dark:text-white"
          rows={3}
        />
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            <button type="button" className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <i className="fas fa-image"></i>
            </button>
            <button type="button" className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <i className="fas fa-link"></i>
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;