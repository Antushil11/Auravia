import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        element: <Homepage></Homepage>
      }
    ]
  },
]);

export default router;