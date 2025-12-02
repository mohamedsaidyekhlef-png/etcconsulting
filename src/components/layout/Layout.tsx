import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollRestoration, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-soft-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
