import React from 'react';
import { FaHome, FaBookmark, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-screen bg-gray-800 flex flex-col items-center py-3 px-4 left-2 top-2 rounded relative">
      <div className="mb-8">
        <Link to="/" className="h-10 w-10 flex items-center justify-center">
          <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86298L5.66298 0.408386H4.06298C2.29498 0.408386 0.878976 1.84039 0.878976 3.60839L0.862976 22.8084C0.862976 24.5764 2.29498 26.0084 4.06298 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z" fill="#FC4747"/>
          </svg>
        </Link>
      </div>
      <nav className="flex flex-col items-center space-y-4">
        <Link to="/" className="text-gray-400 hover:text-white">
          <FaHome size={24} />
        </Link>
        <Link to="/search" className="text-gray-400 hover:text-white">
          <FaSearch size={24} />
        </Link>
        <Link to="/bookmarked" className="text-gray-400 hover:text-white">
          <FaBookmark size={24} />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
