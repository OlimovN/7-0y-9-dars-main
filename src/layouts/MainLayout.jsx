import React from 'react';
import Sidebar from '../components/Sidebar';

function MainLayout({ children }) {  
  return (
    <div className='flex'>
        <Sidebar />
        <div className="content bg-gray-900 p-2">
          {children}  
        </div>
    </div>
  );
}

export default MainLayout;
