import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
