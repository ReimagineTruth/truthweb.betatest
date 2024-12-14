import React from 'react';
import { Link } from 'react-router-dom';

const TrendingTopics: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
      <div className="space-y-4">
        {/* Add trending topics here */}
      </div>
    </div>
  );
};

export default TrendingTopics;