import type React from 'react';
import { useEffect, useState } from 'react';

import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) setSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen relative z-0">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex">
        <main className="pt-16 lg:pl-64 xl:pr-64 grow">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}