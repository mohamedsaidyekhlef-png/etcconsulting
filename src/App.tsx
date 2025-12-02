import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServiceDetail /> },
      { path: "booking", element: <Booking /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "testimonials", element: <Testimonials /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
