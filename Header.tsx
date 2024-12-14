import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ThemeToggle from '@/components/common/ThemeToggle';
import SearchBar from '@/components/common/SearchBar';
import NotificationsButton from '@/components/common/NotificationsButton';

const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              TruthWeb
            </Link>
          </div>

          <div className="hidden md:block">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            <NotificationsButton />
            <ThemeToggle />
            {user ? (
              <Link
                to="/profile"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={user.profilePicture || '/default-avatar.png'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block">{user.username}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;