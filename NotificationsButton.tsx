import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const NotificationsButton: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications);

  return (
    <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
      <i className="fas fa-bell text-gray-500 dark:text-gray-400" />
      {notifications.unreadCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {notifications.unreadCount}
        </span>
      )}
    </button>
  );
};

export default NotificationsButton;