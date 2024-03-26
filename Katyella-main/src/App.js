import './App.css';
import React from 'react';
import Articles from './Pages/Articles';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home />,
      // children 
      // outlet 
    },
    {
      path:"/articles",
      element: <Articles />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
